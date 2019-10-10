var BuildSystem = require("./cmake-js/lib").BuildSystem;

var options = {"directory":"E:/cosmos/examples/N-API_CPP","generator":"MinGW Makefiles","debug":false,"cmakePath":null,"preferMake":false,"preferXcode":false,"preferGnu":false,"preferClang":false,"cMakeOptions":{},"silent":false}


var buildSystem = new BuildSystem(options);
buildSystem.compile()

console.log("Compilation done")



/**
 * 
 * {"directory":"/Volumes/macDrive/Users/janakg/cosmos/exprm/N-API_CPP-master","debug":false,"cmakePath":null,"preferMake":false,"preferXcode":false,"preferGnu":false,"preferClang":false,"cMakeOptions":{},"silent":false}
 * 
 * 
cmake-js compile --log-level=verbose

[
  '/Volumes/macDrive/Users/janakg/.nvm/versions/node/v12.9.1/bin/node',
  '/Volumes/macDrive/Users/janakg/cosmos/exprm/N-API_CPP-master/node_modules/.bin/cmake-js',
  'compile',
  '--log-level=verbose'
]
verb CON Parsing arguments
verb CON options:
verb CON {
verb CON   directory: null,
verb CON   debug: false,
verb CON   cmakePath: null,
verb CON   generator: undefined,
verb CON   toolset: undefined,
verb CON   target: undefined,
verb CON   preferMake: false,
verb CON   preferXcode: false,
verb CON   preferGnu: false,
verb CON   preferClang: false,
verb CON   runtime: undefined,
verb CON   runtimeVersion: undefined,
verb CON   arch: undefined,
verb CON   cMakeOptions: {},
verb CON   silent: false,
verb CON   out: undefined
verb CON }
verb CON Running command: compile
verb CFG Looking for application level CMake.js config in '/Volumes/macDrive/Users/janakg/cosmos/exprm/N-API_CPP-master.
verb CFG Application level CMake.js config doesn't exists.
verb CFG Build system options:
verb CFG {"directory":"/Volumes/macDrive/Users/janakg/cosmos/exprm/N-API_CPP-master","debug":false,"cmakePath":null,"preferMake":false,"preferXcode":false,"preferGnu":false,"preferClang":false,"cMakeOptions":{},"silent":false}
info TOOL Using Unix Makefiles generator.
verb TOOL Setting default OSX compiler flags.
info CMD CONFIGURE
info RUN cmake "/Volumes/macDrive/Users/janakg/cosmos/exprm/N-API_CPP-master" --no-warn-unused-cli -G"Unix Makefiles" -DCMAKE_JS_VERSION="5.3.2" -DCMAKE_BUILD_TYPE="Release" -DCMAKE_LIBRARY_OUTPUT_DIRECTORY="/Volumes/macDrive/Users/janakg/cosmos/exprm/N-API_CPP-master/build/Release" -DCMAKE_JS_INC="/Volumes/macDrive/Users/janakg/.cmake-js/node-x64/v12.9.1/include/node" -DCMAKE_JS_SRC="" -DNODE_RUNTIME="node" -DNODE_RUNTIMEVERSION="12.9.1" -DNODE_ARCH="x64" -DCMAKE_CXX_FLAGS="-D_DARWIN_USE_64_BIT_INODE=1 -D_LARGEFILE_SOURCE -D_FILE_OFFSET_BITS=64 -DBUILDING_NODE_EXTENSION" -DCMAKE_SHARED_LINKER_FLAGS="-undefined dynamic_lookup"
Not searching for unused variables given on the command line.
-- The C compiler identification is AppleClang 10.0.1.10010046
-- The CXX compiler identification is AppleClang 10.0.1.10010046
-- Check for working C compiler: /Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin/cc
-- Check for working C compiler: /Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin/cc -- works
-- Detecting C compiler ABI info
-- Detecting C compiler ABI info - done
-- Detecting C compile features
-- Detecting C compile features - done
-- Check for working CXX compiler: /Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin/c++
-- Check for working CXX compiler: /Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin/c++ -- works
-- Detecting CXX compiler ABI info
-- Detecting CXX compiler ABI info - done
-- Detecting CXX compile features
-- Detecting CXX compile features - done
-- Configuring done
-- Generating done
-- Build files have been written to: /Volumes/macDrive/Users/janakg/cosmos/exprm/N-API_CPP-master/build
info CMD BUILD
info RUN cmake --build "/Volumes/macDrive/Users/janakg/cosmos/exprm/N-API_CPP-master/build" --config Release
Scanning dependencies of target mingw_test
[ 50%] Building CXX object CMakeFiles/mingw_test.dir/main.cpp.o
[100%] Linking CXX shared library Release/mingw_test.node
[100%] Built target mingw_test






 */