[jquery.print](http://github.com/smparkes/jquery.print) - jquery plugin to convert objects to strings
================================

What you need to build your own jquery.print
---------------------------------------
* Make sure that you have Java installed (if you want to build a minified version of jquery.print).
If not, go to this page and download "Java Runtime Environment (JRE) 5.0"  
[http://java.sun.com/javase/downloads/index.jsp](http://java.sun.com/javase/downloads/index.jsp)

* You now have two options for building jquery.print, if you have access to common UNIX commands (like `make`, `mkdir`, `rm`, `cat`, and `echo`) then simply type `make` to build all the components.

* The other option is if you have Ant installed (or are on Windows and don't have access to make). You can download Ant from here: [http://ant.apache.org/bindownload.cgi](http://ant.apache.org/bindownload.cgi)
If you do have Ant, everytime (in this README) that I say 'make', do 'ant' instead - it works identically (for all intents and purposes).

How to build your own jquery.print
-----------------------------

In the main directory of the distribution (the one that this file is in), type
the following to make all versions of jquery.print:

`make`

Here are each of the individual items that are buildable from the Makefile.

`make jquery.print`

The standard, uncompressed, jquery.print code.  
Makes: ./dist/jquery.print.js

`make min`

A compressed version of jquery.print (made the Closure Compiler).  
Makes: ./dist/jquery.print.min.js

Finally, you can remove all the built files using the command:
  
`make clean`

Additionally, if you want to install jquery.print to a location that is not this
directory, you can specify the PREFIX directory, for example:
  
`make PREFIX=/home/john/test/`

OR

`make PREFIX=~/www/ docs`

(Docs/structure shamelessly copied from jQuery);