#!/usr/bin/env watchr

begin; require 'watchr/event_handlers/em'; rescue LoadError; end
begin; require 'watchr/deps'; rescue LoadError; end

watch( %r(.*), :modified, lambda { |md| File.directory? md[0] } ) do |md|
  File.directory? md[0] and raise Watchr::Refresh
end

watch( %r(jqueryl.print.watchr), :modified ) do |md|
  raise Watchr::Refresh
end

jslint = lambda do |*args|
  files = []
  # boy, clean this up, but call/splat are subtle
  if Array === args[0]
    args = args[0][0]
    files = args.map { |pair| pair[0][0] }
    files.compact!
    files.uniq!
  else
    (file, event) = *args
    files = [ file ]
  end
  if !files.empty?
    cmd = "jslintrb #{files.join(" ")}"
    puts cmd
    system cmd
    puts "exit status: #{$?.exitstatus}" if $?.exited? && $?.exitstatus != 0
    if  $?.signaled? && $?.termsig == 2
      Process.kill 2, 0
    end
  end
end

watch( %r(^((spec|lib|public|src)/.*)\.js$), [ :load, :created, :modified ],
       nil, :batch => :jslint ) do |events|
  jslint.call events
end

Signal.trap('QUIT') do
  EM.stop
end

# Local Variables:
# mode:ruby
# End:
