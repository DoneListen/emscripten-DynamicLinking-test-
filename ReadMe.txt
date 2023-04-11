A demo of the use of emscripten dynamic linking

Version of emscripten/emsdk: v3.1.15.

compile side module:
emcc -s WASM=1 myAdd.cpp -o MyAdd.wasm -s USE_PTHREADS=1 -s PTHREAD_POOL_SIZE=navigator.hardwareConcurrency -s USE_WEBGL2=1 -s FULL_ES3=1 -s ASSERTIONS=1 -s NO_EXIT_RUNTIME=1 -s ALLOW_MEMORY_GROWTH=1 -s ALLOW_TABLE_GROWTH=1 -s EXPORT_ALL=1 -s ERROR_ON_UNDEFINED_SYMBOLS=0 -s FETCH=1 -s FORCE_FILESYSTEM=1 --bind  -std=c++14 -s ENVIRONMENT=web,worker -s TEXTDECODER=0 -s "EXPORTED_RUNTIME_METHODS=['allocate','allocateUTF8','UTF8ToString']"  -s EXPORTED_FUNCTIONS=_main,_free,_malloc,_htons,_ntohs -s MAXIMUM_MEMORY=4gb -s SIDE_MODULE=2 

compile main module:
emcc -s WASM=1 main.cpp -o main.js -s USE_PTHREADS=1 -s PTHREAD_POOL_SIZE=navigator.hardwareConcurrency -s USE_WEBGL2=1 -s FULL_ES3=1 -s ASSERTIONS=1 -s NO_EXIT_RUNTIME=1 -s ALLOW_MEMORY_GROWTH=1 -s ALLOW_TABLE_GROWTH=1 -s EXPORT_ALL=1 -s ERROR_ON_UNDEFINED_SYMBOLS=0 -s FETCH=1 -s FORCE_FILESYSTEM=1 --bind  -std=c++14 -s ENVIRONMENT=web,worker -s TEXTDECODER=0 -s "EXPORTED_RUNTIME_METHODS=['allocate','allocateUTF8','UTF8ToString']"  -s EXPORTED_FUNCTIONS=_main,_free,_malloc,_htons,_ntohs -s MAXIMUM_MEMORY=4gb -s MODULARIZE=1 -s EXPORT_NAME="createModule" -s MAIN_MODULE=2 MyAdd.wasm 

server：emrun --no_browser --port 8070 .

Test demo：
http://localhost:8070/test.html

