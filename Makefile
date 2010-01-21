SRC_DIR = src
BUILD_DIR = build

PREFIX = .
DIST_DIR = ${PREFIX}/dist

BASE_FILES = ${SRC_DIR}/jquery.print.js

MODULES = ${BASE_FILES}

JQP = ${DIST_DIR}/jquery.print.js
JQP_MIN = ${DIST_DIR}/jquery.print.min.js

JQP_VER = `cat version.txt`
VER = sed s/@VERSION/${JQP_VER}/

MINJAR = java -jar ${BUILD_DIR}/google-compiler-20091218.jar

DATE=`git log -1 | grep Date: | sed 's/[^:]*: *//'`

all: jquery.print min
	@@echo "jquery.print build complete."

${DIST_DIR}:
	@@mkdir -p ${DIST_DIR}

jquery.print: ${DIST_DIR} ${JQP}

${JQP}: ${MODULES}
	@@echo "Building" ${JQP}

	@@mkdir -p ${DIST_DIR}

	@@cat ${MODULES} | \
		sed 's/Date:./&'"${DATE}"'/' | \
		${VER} > ${JQP};

min: ${JQP_MIN}

${JQP_MIN}: ${JQP}
	@@echo "Building" ${JQP_MIN}

	@@head -15 ${JQP} > ${JQP_MIN}
	@@${MINJAR} --js ${JQP} --warning_level QUIET >> ${JQP_MIN}

clean:
	@@echo "Removing Distribution directory:" ${DIST_DIR}
	@@rm -rf ${DIST_DIR}