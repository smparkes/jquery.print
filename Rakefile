# Basic Rakefile for building jquery.print
files = [ "jquery.print" ]

date = `git log -1 | grep Date: | sed 's/[^:]*: *//'`.gsub(/\n/, "")
version = `cat version.txt`.gsub(/\n/, "")

task :default => :jquery_print

task :jquery_print do
	sh "mkdir -p dist"
	sh "cat " + files.map {|file| "src/" + file + ".js"}.join(" ") +
		" | sed 's/Date:./&" + date + "/' | " +
		" sed s/@VERSION/" + version + "/ > dist/jquery.print.js"
end
