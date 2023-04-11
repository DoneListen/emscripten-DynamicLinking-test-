
var createModule = (() => {
  var _scriptDir = typeof document !== 'undefined' && document.currentScript ? document.currentScript.src : undefined;
  
  return (
function(createModule) {
  createModule = createModule || {};



// Support for growable heap + pthreads, where the buffer may change, so JS views
// must be updated.
function GROWABLE_HEAP_I8() {
  if (wasmMemory.buffer != buffer) {
    updateGlobalBufferAndViews(wasmMemory.buffer);
  }
  return HEAP8;
}
function GROWABLE_HEAP_U8() {
  if (wasmMemory.buffer != buffer) {
    updateGlobalBufferAndViews(wasmMemory.buffer);
  }
  return HEAPU8;
}
function GROWABLE_HEAP_I16() {
  if (wasmMemory.buffer != buffer) {
    updateGlobalBufferAndViews(wasmMemory.buffer);
  }
  return HEAP16;
}
function GROWABLE_HEAP_U16() {
  if (wasmMemory.buffer != buffer) {
    updateGlobalBufferAndViews(wasmMemory.buffer);
  }
  return HEAPU16;
}
function GROWABLE_HEAP_I32() {
  if (wasmMemory.buffer != buffer) {
    updateGlobalBufferAndViews(wasmMemory.buffer);
  }
  return HEAP32;
}
function GROWABLE_HEAP_U32() {
  if (wasmMemory.buffer != buffer) {
    updateGlobalBufferAndViews(wasmMemory.buffer);
  }
  return HEAPU32;
}
function GROWABLE_HEAP_F32() {
  if (wasmMemory.buffer != buffer) {
    updateGlobalBufferAndViews(wasmMemory.buffer);
  }
  return HEAPF32;
}
function GROWABLE_HEAP_F64() {
  if (wasmMemory.buffer != buffer) {
    updateGlobalBufferAndViews(wasmMemory.buffer);
  }
  return HEAPF64;
}

var Module = typeof createModule != "undefined" ? createModule : {};

var readyPromiseResolve, readyPromiseReject;

Module["ready"] = new Promise(function(resolve, reject) {
 readyPromiseResolve = resolve;
 readyPromiseReject = reject;
});

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_main")) {
 Object.defineProperty(Module["ready"], "_main", {
  configurable: true,
  get: function() {
   abort("You are getting _main on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_main", {
  configurable: true,
  set: function() {
   abort("You are setting _main on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_free")) {
 Object.defineProperty(Module["ready"], "_free", {
  configurable: true,
  get: function() {
   abort("You are getting _free on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_free", {
  configurable: true,
  set: function() {
   abort("You are setting _free on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_malloc")) {
 Object.defineProperty(Module["ready"], "_malloc", {
  configurable: true,
  get: function() {
   abort("You are getting _malloc on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_malloc", {
  configurable: true,
  set: function() {
   abort("You are setting _malloc on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_htons")) {
 Object.defineProperty(Module["ready"], "_htons", {
  configurable: true,
  get: function() {
   abort("You are getting _htons on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_htons", {
  configurable: true,
  set: function() {
   abort("You are setting _htons on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_ntohs")) {
 Object.defineProperty(Module["ready"], "_ntohs", {
  configurable: true,
  get: function() {
   abort("You are getting _ntohs on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_ntohs", {
  configurable: true,
  set: function() {
   abort("You are setting _ntohs on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "__emscripten_thread_init")) {
 Object.defineProperty(Module["ready"], "__emscripten_thread_init", {
  configurable: true,
  get: function() {
   abort("You are getting __emscripten_thread_init on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "__emscripten_thread_init", {
  configurable: true,
  set: function() {
   abort("You are setting __emscripten_thread_init on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "__emscripten_thread_exit")) {
 Object.defineProperty(Module["ready"], "__emscripten_thread_exit", {
  configurable: true,
  get: function() {
   abort("You are getting __emscripten_thread_exit on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "__emscripten_thread_exit", {
  configurable: true,
  set: function() {
   abort("You are setting __emscripten_thread_exit on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "__emscripten_thread_crashed")) {
 Object.defineProperty(Module["ready"], "__emscripten_thread_crashed", {
  configurable: true,
  get: function() {
   abort("You are getting __emscripten_thread_crashed on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "__emscripten_thread_crashed", {
  configurable: true,
  set: function() {
   abort("You are setting __emscripten_thread_crashed on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "__emscripten_tls_init")) {
 Object.defineProperty(Module["ready"], "__emscripten_tls_init", {
  configurable: true,
  get: function() {
   abort("You are getting __emscripten_tls_init on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "__emscripten_tls_init", {
  configurable: true,
  set: function() {
   abort("You are setting __emscripten_tls_init on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_pthread_self")) {
 Object.defineProperty(Module["ready"], "_pthread_self", {
  configurable: true,
  get: function() {
   abort("You are getting _pthread_self on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_pthread_self", {
  configurable: true,
  set: function() {
   abort("You are setting _pthread_self on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "executeNotifiedProxyingQueue")) {
 Object.defineProperty(Module["ready"], "executeNotifiedProxyingQueue", {
  configurable: true,
  get: function() {
   abort("You are getting executeNotifiedProxyingQueue on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "executeNotifiedProxyingQueue", {
  configurable: true,
  set: function() {
   abort("You are setting executeNotifiedProxyingQueue on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "establishStackSpace")) {
 Object.defineProperty(Module["ready"], "establishStackSpace", {
  configurable: true,
  get: function() {
   abort("You are getting establishStackSpace on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "establishStackSpace", {
  configurable: true,
  set: function() {
   abort("You are setting establishStackSpace on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "invokeEntryPoint")) {
 Object.defineProperty(Module["ready"], "invokeEntryPoint", {
  configurable: true,
  get: function() {
   abort("You are getting invokeEntryPoint on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "invokeEntryPoint", {
  configurable: true,
  set: function() {
   abort("You are setting invokeEntryPoint on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "PThread")) {
 Object.defineProperty(Module["ready"], "PThread", {
  configurable: true,
  get: function() {
   abort("You are getting PThread on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "PThread", {
  configurable: true,
  set: function() {
   abort("You are setting PThread on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_emscripten_builtin_memalign")) {
 Object.defineProperty(Module["ready"], "_emscripten_builtin_memalign", {
  configurable: true,
  get: function() {
   abort("You are getting _emscripten_builtin_memalign on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_emscripten_builtin_memalign", {
  configurable: true,
  set: function() {
   abort("You are setting _emscripten_builtin_memalign on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "___stack_pointer")) {
 Object.defineProperty(Module["ready"], "___stack_pointer", {
  configurable: true,
  get: function() {
   abort("You are getting ___stack_pointer on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "___stack_pointer", {
  configurable: true,
  set: function() {
   abort("You are setting ___stack_pointer on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "___table_base")) {
 Object.defineProperty(Module["ready"], "___table_base", {
  configurable: true,
  get: function() {
   abort("You are getting ___table_base on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "___table_base", {
  configurable: true,
  set: function() {
   abort("You are setting ___table_base on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "___memory_base")) {
 Object.defineProperty(Module["ready"], "___memory_base", {
  configurable: true,
  get: function() {
   abort("You are getting ___memory_base on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "___memory_base", {
  configurable: true,
  set: function() {
   abort("You are setting ___memory_base on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "___wasm_apply_data_relocs")) {
 Object.defineProperty(Module["ready"], "___wasm_apply_data_relocs", {
  configurable: true,
  get: function() {
   abort("You are getting ___wasm_apply_data_relocs on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "___wasm_apply_data_relocs", {
  configurable: true,
  set: function() {
   abort("You are setting ___wasm_apply_data_relocs on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "___getTypeName")) {
 Object.defineProperty(Module["ready"], "___getTypeName", {
  configurable: true,
  get: function() {
   abort("You are getting ___getTypeName on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "___getTypeName", {
  configurable: true,
  set: function() {
   abort("You are setting ___getTypeName on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "___embind_register_native_and_builtin_types")) {
 Object.defineProperty(Module["ready"], "___embind_register_native_and_builtin_types", {
  configurable: true,
  get: function() {
   abort("You are getting ___embind_register_native_and_builtin_types on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "___embind_register_native_and_builtin_types", {
  configurable: true,
  set: function() {
   abort("You are setting ___embind_register_native_and_builtin_types on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fflush")) {
 Object.defineProperty(Module["ready"], "_fflush", {
  configurable: true,
  get: function() {
   abort("You are getting _fflush on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fflush", {
  configurable: true,
  set: function() {
   abort("You are setting _fflush on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "__emscripten_proxy_execute_task_queue")) {
 Object.defineProperty(Module["ready"], "__emscripten_proxy_execute_task_queue", {
  configurable: true,
  get: function() {
   abort("You are getting __emscripten_proxy_execute_task_queue on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "__emscripten_proxy_execute_task_queue", {
  configurable: true,
  set: function() {
   abort("You are setting __emscripten_proxy_execute_task_queue on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "onRuntimeInitialized")) {
 Object.defineProperty(Module["ready"], "onRuntimeInitialized", {
  configurable: true,
  get: function() {
   abort("You are getting onRuntimeInitialized on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "onRuntimeInitialized", {
  configurable: true,
  set: function() {
   abort("You are setting onRuntimeInitialized on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

var moduleOverrides = Object.assign({}, Module);

var arguments_ = [];

var thisProgram = "./this.program";

var quit_ = (status, toThrow) => {
 throw toThrow;
};

var ENVIRONMENT_IS_WEB = typeof window == "object";

var ENVIRONMENT_IS_WORKER = typeof importScripts == "function";

var ENVIRONMENT_IS_NODE = typeof process == "object" && typeof process.versions == "object" && typeof process.versions.node == "string";

var ENVIRONMENT_IS_SHELL = !ENVIRONMENT_IS_WEB && !ENVIRONMENT_IS_NODE && !ENVIRONMENT_IS_WORKER;

if (Module["ENVIRONMENT"]) {
 throw new Error("Module.ENVIRONMENT has been deprecated. To force the environment, use the ENVIRONMENT compile-time option (for example, -sENVIRONMENT=web or -sENVIRONMENT=node)");
}

var ENVIRONMENT_IS_PTHREAD = Module["ENVIRONMENT_IS_PTHREAD"] || false;

var scriptDirectory = "";

function locateFile(path) {
 if (Module["locateFile"]) {
  return Module["locateFile"](path, scriptDirectory);
 }
 return scriptDirectory + path;
}

var read_, readAsync, readBinary, setWindowTitle;

function logExceptionOnExit(e) {
 if (e instanceof ExitStatus) return;
 let toLog = e;
 if (e && typeof e == "object" && e.stack) {
  toLog = [ e, e.stack ];
 }
 err("exiting due to exception: " + toLog);
}

if (ENVIRONMENT_IS_SHELL) {
 if (typeof process == "object" && typeof require === "function" || typeof window == "object" || typeof importScripts == "function") throw new Error("not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)");
 if (typeof read != "undefined") {
  read_ = function shell_read(f) {
   return read(f);
  };
 }
 readBinary = function readBinary(f) {
  let data;
  if (typeof readbuffer == "function") {
   return new Uint8Array(readbuffer(f));
  }
  data = read(f, "binary");
  assert(typeof data == "object");
  return data;
 };
 readAsync = function readAsync(f, onload, onerror) {
  setTimeout(() => onload(readBinary(f)), 0);
 };
 if (typeof scriptArgs != "undefined") {
  arguments_ = scriptArgs;
 } else if (typeof arguments != "undefined") {
  arguments_ = arguments;
 }
 if (typeof quit == "function") {
  quit_ = (status, toThrow) => {
   logExceptionOnExit(toThrow);
   quit(status);
  };
 }
 if (typeof print != "undefined") {
  if (typeof console == "undefined") console = {};
  console.log = print;
  console.warn = console.error = typeof printErr != "undefined" ? printErr : print;
 }
} else if (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) {
 if (ENVIRONMENT_IS_WORKER) {
  scriptDirectory = self.location.href;
 } else if (typeof document != "undefined" && document.currentScript) {
  scriptDirectory = document.currentScript.src;
 }
 if (_scriptDir) {
  scriptDirectory = _scriptDir;
 }
 if (scriptDirectory.indexOf("blob:") !== 0) {
  scriptDirectory = scriptDirectory.substr(0, scriptDirectory.replace(/[?#].*/, "").lastIndexOf("/") + 1);
 } else {
  scriptDirectory = "";
 }
 if (!(typeof window == "object" || typeof importScripts == "function")) throw new Error("not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)");
 {
  read_ = url => {
   var xhr = new XMLHttpRequest();
   xhr.open("GET", url, false);
   xhr.send(null);
   return xhr.responseText;
  };
  if (ENVIRONMENT_IS_WORKER) {
   readBinary = url => {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, false);
    xhr.responseType = "arraybuffer";
    xhr.send(null);
    return new Uint8Array(xhr.response);
   };
  }
  readAsync = (url, onload, onerror) => {
   var xhr = new XMLHttpRequest();
   xhr.open("GET", url, true);
   xhr.responseType = "arraybuffer";
   xhr.onload = () => {
    if (xhr.status == 200 || xhr.status == 0 && xhr.response) {
     onload(xhr.response);
     return;
    }
    onerror();
   };
   xhr.onerror = onerror;
   xhr.send(null);
  };
 }
 setWindowTitle = title => document.title = title;
} else {
 throw new Error("environment detection error");
}

var out = Module["print"] || console.log.bind(console);

var err = Module["printErr"] || console.warn.bind(console);

Object.assign(Module, moduleOverrides);

moduleOverrides = null;

checkIncomingModuleAPI();

if (Module["arguments"]) arguments_ = Module["arguments"];

legacyModuleProp("arguments", "arguments_");

if (Module["thisProgram"]) thisProgram = Module["thisProgram"];

legacyModuleProp("thisProgram", "thisProgram");

if (Module["quit"]) quit_ = Module["quit"];

legacyModuleProp("quit", "quit_");

assert(typeof Module["memoryInitializerPrefixURL"] == "undefined", "Module.memoryInitializerPrefixURL option was removed, use Module.locateFile instead");

assert(typeof Module["pthreadMainPrefixURL"] == "undefined", "Module.pthreadMainPrefixURL option was removed, use Module.locateFile instead");

assert(typeof Module["cdInitializerPrefixURL"] == "undefined", "Module.cdInitializerPrefixURL option was removed, use Module.locateFile instead");

assert(typeof Module["filePackagePrefixURL"] == "undefined", "Module.filePackagePrefixURL option was removed, use Module.locateFile instead");

assert(typeof Module["read"] == "undefined", "Module.read option was removed (modify read_ in JS)");

assert(typeof Module["readAsync"] == "undefined", "Module.readAsync option was removed (modify readAsync in JS)");

assert(typeof Module["readBinary"] == "undefined", "Module.readBinary option was removed (modify readBinary in JS)");

assert(typeof Module["setWindowTitle"] == "undefined", "Module.setWindowTitle option was removed (modify setWindowTitle in JS)");

assert(typeof Module["TOTAL_MEMORY"] == "undefined", "Module.TOTAL_MEMORY has been renamed Module.INITIAL_MEMORY");

legacyModuleProp("read", "read_");

legacyModuleProp("readAsync", "readAsync");

legacyModuleProp("readBinary", "readBinary");

legacyModuleProp("setWindowTitle", "setWindowTitle");

var IDBFS = "IDBFS is no longer included by default; build with -lidbfs.js";

var PROXYFS = "PROXYFS is no longer included by default; build with -lproxyfs.js";

var WORKERFS = "WORKERFS is no longer included by default; build with -lworkerfs.js";

var NODEFS = "NODEFS is no longer included by default; build with -lnodefs.js";

assert(ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER || ENVIRONMENT_IS_NODE, "Pthreads do not work in this environment yet (need Web Workers, or an alternative to them)");

assert(!ENVIRONMENT_IS_NODE, "node environment detected but not enabled at build time.  Add 'node' to `-sENVIRONMENT` to enable.");

assert(!ENVIRONMENT_IS_SHELL, "shell environment detected but not enabled at build time.  Add 'shell' to `-sENVIRONMENT` to enable.");

var STACK_ALIGN = 16;

var POINTER_SIZE = 4;

function getNativeTypeSize(type) {
 switch (type) {
 case "i1":
 case "i8":
 case "u8":
  return 1;

 case "i16":
 case "u16":
  return 2;

 case "i32":
 case "u32":
  return 4;

 case "i64":
 case "u64":
  return 8;

 case "float":
  return 4;

 case "double":
  return 8;

 default:
  {
   if (type[type.length - 1] === "*") {
    return POINTER_SIZE;
   } else if (type[0] === "i") {
    const bits = Number(type.substr(1));
    assert(bits % 8 === 0, "getNativeTypeSize invalid bits " + bits + ", type " + type);
    return bits / 8;
   } else {
    return 0;
   }
  }
 }
}

function warnOnce(text) {
 if (!warnOnce.shown) warnOnce.shown = {};
 if (!warnOnce.shown[text]) {
  warnOnce.shown[text] = 1;
  err(text);
 }
}

function uleb128Encode(n) {
 assert(n < 16384);
 if (n < 128) {
  return [ n ];
 }
 return [ n % 128 | 128, n >> 7 ];
}

function sigToWasmTypes(sig) {
 var typeNames = {
  "i": "i32",
  "j": "i64",
  "f": "f32",
  "d": "f64",
  "p": "i32"
 };
 var type = {
  parameters: [],
  results: sig[0] == "v" ? [] : [ typeNames[sig[0]] ]
 };
 for (var i = 1; i < sig.length; ++i) {
  assert(sig[i] in typeNames, "invalid signature char: " + sig[i]);
  type.parameters.push(typeNames[sig[i]]);
 }
 return type;
}

function convertJsFunctionToWasm(func, sig) {
 if (typeof WebAssembly.Function == "function") {
  return new WebAssembly.Function(sigToWasmTypes(sig), func);
 }
 var typeSection = [ 1, 96 ];
 var sigRet = sig.slice(0, 1);
 var sigParam = sig.slice(1);
 var typeCodes = {
  "i": 127,
  "p": 127,
  "j": 126,
  "f": 125,
  "d": 124
 };
 typeSection = typeSection.concat(uleb128Encode(sigParam.length));
 for (var i = 0; i < sigParam.length; ++i) {
  assert(sigParam[i] in typeCodes, "invalid signature char: " + sigParam[i]);
  typeSection.push(typeCodes[sigParam[i]]);
 }
 if (sigRet == "v") {
  typeSection.push(0);
 } else {
  typeSection = typeSection.concat([ 1, typeCodes[sigRet] ]);
 }
 typeSection = [ 1 ].concat(uleb128Encode(typeSection.length), typeSection);
 var bytes = new Uint8Array([ 0, 97, 115, 109, 1, 0, 0, 0 ].concat(typeSection, [ 2, 7, 1, 1, 101, 1, 102, 0, 0, 7, 5, 1, 1, 102, 0, 0 ]));
 var module = new WebAssembly.Module(bytes);
 var instance = new WebAssembly.Instance(module, {
  "e": {
   "f": func
  }
 });
 var wrappedFunc = instance.exports["f"];
 return wrappedFunc;
}

var freeTableIndexes = [];

var functionsInTableMap;

function getEmptyTableSlot() {
 if (freeTableIndexes.length) {
  return freeTableIndexes.pop();
 }
 try {
  wasmTable.grow(1);
 } catch (err) {
  if (!(err instanceof RangeError)) {
   throw err;
  }
  throw "Unable to grow wasm table. Set ALLOW_TABLE_GROWTH.";
 }
 return wasmTable.length - 1;
}

function updateTableMap(offset, count) {
 for (var i = offset; i < offset + count; i++) {
  var item = getWasmTableEntry(i);
  if (item) {
   functionsInTableMap.set(item, i);
  }
 }
}

function addFunction(func, sig) {
 assert(typeof func != "undefined");
 if (!functionsInTableMap) {
  functionsInTableMap = new WeakMap();
  updateTableMap(0, wasmTable.length);
 }
 if (functionsInTableMap.has(func)) {
  return functionsInTableMap.get(func);
 }
 var ret = getEmptyTableSlot();
 try {
  setWasmTableEntry(ret, func);
 } catch (err) {
  if (!(err instanceof TypeError)) {
   throw err;
  }
  assert(typeof sig != "undefined", "Missing signature argument to addFunction: " + func);
  var wrapped = convertJsFunctionToWasm(func, sig);
  setWasmTableEntry(ret, wrapped);
 }
 functionsInTableMap.set(func, ret);
 return ret;
}

function removeFunction(index) {
 functionsInTableMap.delete(getWasmTableEntry(index));
 freeTableIndexes.push(index);
}

function legacyModuleProp(prop, newName) {
 if (!Object.getOwnPropertyDescriptor(Module, prop)) {
  Object.defineProperty(Module, prop, {
   configurable: true,
   get: function() {
    abort("Module." + prop + " has been replaced with plain " + newName + " (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)");
   }
  });
 }
}

function ignoredModuleProp(prop) {
 if (Object.getOwnPropertyDescriptor(Module, prop)) {
  abort("`Module." + prop + "` was supplied but `" + prop + "` not included in INCOMING_MODULE_JS_API");
 }
}

function unexportedMessage(sym, isFSSybol) {
 var msg = "'" + sym + "' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)";
 if (isFSSybol) {
  msg += ". Alternatively, forcing filesystem support (-sFORCE_FILESYSTEM) can export this for you";
 }
 return msg;
}

function unexportedRuntimeSymbol(sym, isFSSybol) {
 if (!Object.getOwnPropertyDescriptor(Module, sym)) {
  Object.defineProperty(Module, sym, {
   configurable: true,
   get: function() {
    abort(unexportedMessage(sym, isFSSybol));
   }
  });
 }
}

function unexportedRuntimeFunction(sym, isFSSybol) {
 if (!Object.getOwnPropertyDescriptor(Module, sym)) {
  Module[sym] = () => abort(unexportedMessage(sym, isFSSybol));
 }
}

var tempRet0 = 0;

var setTempRet0 = value => {
 tempRet0 = value;
};

var getTempRet0 = () => tempRet0;

var Atomics_load = Atomics.load;

var Atomics_store = Atomics.store;

var Atomics_compareExchange = Atomics.compareExchange;

var dynamicLibraries = Module["dynamicLibraries"] || [];

var wasmBinary;

if (Module["wasmBinary"]) wasmBinary = Module["wasmBinary"];

legacyModuleProp("wasmBinary", "wasmBinary");

var noExitRuntime = Module["noExitRuntime"] || true;

legacyModuleProp("noExitRuntime", "noExitRuntime");

if (typeof WebAssembly != "object") {
 abort("no native wasm support detected");
}

var wasmMemory;

var wasmModule;

var ABORT = false;

var EXITSTATUS;

function assert(condition, text) {
 if (!condition) {
  abort("Assertion failed" + (text ? ": " + text : ""));
 }
}

function getCFunc(ident) {
 var func = Module["_" + ident];
 assert(func, "Cannot call unknown function " + ident + ", make sure it is exported");
 return func;
}

function ccall(ident, returnType, argTypes, args, opts) {
 var toC = {
  "string": function(str) {
   var ret = 0;
   if (str !== null && str !== undefined && str !== 0) {
    var len = (str.length << 2) + 1;
    ret = stackAlloc(len);
    stringToUTF8(str, ret, len);
   }
   return ret;
  },
  "array": function(arr) {
   var ret = stackAlloc(arr.length);
   writeArrayToMemory(arr, ret);
   return ret;
  }
 };
 function convertReturnValue(ret) {
  if (returnType === "string") {
   return UTF8ToString(ret);
  }
  if (returnType === "boolean") return Boolean(ret);
  return ret;
 }
 var func = getCFunc(ident);
 var cArgs = [];
 var stack = 0;
 assert(returnType !== "array", 'Return type should not be "array".');
 if (args) {
  for (var i = 0; i < args.length; i++) {
   var converter = toC[argTypes[i]];
   if (converter) {
    if (stack === 0) stack = stackSave();
    cArgs[i] = converter(args[i]);
   } else {
    cArgs[i] = args[i];
   }
  }
 }
 var ret = func.apply(null, cArgs);
 function onDone(ret) {
  if (stack !== 0) stackRestore(stack);
  return convertReturnValue(ret);
 }
 ret = onDone(ret);
 return ret;
}

function cwrap(ident, returnType, argTypes, opts) {
 return function() {
  return ccall(ident, returnType, argTypes, arguments, opts);
 };
}

var ALLOC_NORMAL = 0;

var ALLOC_STACK = 1;

function allocate(slab, allocator) {
 var ret;
 assert(typeof allocator == "number", "allocate no longer takes a type argument");
 assert(typeof slab != "number", "allocate no longer takes a number as arg0");
 if (allocator == ALLOC_STACK) {
  ret = stackAlloc(slab.length);
 } else {
  ret = _malloc(slab.length);
 }
 if (!slab.subarray && !slab.slice) {
  slab = new Uint8Array(slab);
 }
 GROWABLE_HEAP_U8().set(slab, ret >>> 0);
 return ret;
}

function UTF8ArrayToString(heapOrArray, idx, maxBytesToRead) {
 idx >>>= 0;
 var endIdx = idx + maxBytesToRead;
 var str = "";
 while (!(idx >= endIdx)) {
  var u0 = heapOrArray[idx++];
  if (!u0) return str;
  if (!(u0 & 128)) {
   str += String.fromCharCode(u0);
   continue;
  }
  var u1 = heapOrArray[idx++] & 63;
  if ((u0 & 224) == 192) {
   str += String.fromCharCode((u0 & 31) << 6 | u1);
   continue;
  }
  var u2 = heapOrArray[idx++] & 63;
  if ((u0 & 240) == 224) {
   u0 = (u0 & 15) << 12 | u1 << 6 | u2;
  } else {
   if ((u0 & 248) != 240) warnOnce("Invalid UTF-8 leading byte 0x" + u0.toString(16) + " encountered when deserializing a UTF-8 string in wasm memory to a JS string!");
   u0 = (u0 & 7) << 18 | u1 << 12 | u2 << 6 | heapOrArray[idx++] & 63;
  }
  if (u0 < 65536) {
   str += String.fromCharCode(u0);
  } else {
   var ch = u0 - 65536;
   str += String.fromCharCode(55296 | ch >> 10, 56320 | ch & 1023);
  }
 }
 return str;
}

function UTF8ToString(ptr, maxBytesToRead) {
 ptr >>>= 0;
 return ptr ? UTF8ArrayToString(GROWABLE_HEAP_U8(), ptr, maxBytesToRead) : "";
}

function stringToUTF8Array(str, heap, outIdx, maxBytesToWrite) {
 outIdx >>>= 0;
 if (!(maxBytesToWrite > 0)) return 0;
 var startIdx = outIdx;
 var endIdx = outIdx + maxBytesToWrite - 1;
 for (var i = 0; i < str.length; ++i) {
  var u = str.charCodeAt(i);
  if (u >= 55296 && u <= 57343) {
   var u1 = str.charCodeAt(++i);
   u = 65536 + ((u & 1023) << 10) | u1 & 1023;
  }
  if (u <= 127) {
   if (outIdx >= endIdx) break;
   heap[outIdx++ >>> 0] = u;
  } else if (u <= 2047) {
   if (outIdx + 1 >= endIdx) break;
   heap[outIdx++ >>> 0] = 192 | u >> 6;
   heap[outIdx++ >>> 0] = 128 | u & 63;
  } else if (u <= 65535) {
   if (outIdx + 2 >= endIdx) break;
   heap[outIdx++ >>> 0] = 224 | u >> 12;
   heap[outIdx++ >>> 0] = 128 | u >> 6 & 63;
   heap[outIdx++ >>> 0] = 128 | u & 63;
  } else {
   if (outIdx + 3 >= endIdx) break;
   if (u > 1114111) warnOnce("Invalid Unicode code point 0x" + u.toString(16) + " encountered when serializing a JS string to a UTF-8 string in wasm memory! (Valid unicode code points should be in range 0-0x10FFFF).");
   heap[outIdx++ >>> 0] = 240 | u >> 18;
   heap[outIdx++ >>> 0] = 128 | u >> 12 & 63;
   heap[outIdx++ >>> 0] = 128 | u >> 6 & 63;
   heap[outIdx++ >>> 0] = 128 | u & 63;
  }
 }
 heap[outIdx >>> 0] = 0;
 return outIdx - startIdx;
}

function stringToUTF8(str, outPtr, maxBytesToWrite) {
 assert(typeof maxBytesToWrite == "number", "stringToUTF8(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!");
 return stringToUTF8Array(str, GROWABLE_HEAP_U8(), outPtr, maxBytesToWrite);
}

function lengthBytesUTF8(str) {
 var len = 0;
 for (var i = 0; i < str.length; ++i) {
  var u = str.charCodeAt(i);
  if (u >= 55296 && u <= 57343) u = 65536 + ((u & 1023) << 10) | str.charCodeAt(++i) & 1023;
  if (u <= 127) ++len; else if (u <= 2047) len += 2; else if (u <= 65535) len += 3; else len += 4;
 }
 return len;
}

function AsciiToString(ptr) {
 ptr >>>= 0;
 var str = "";
 while (1) {
  var ch = GROWABLE_HEAP_U8()[ptr++ >>> 0];
  if (!ch) return str;
  str += String.fromCharCode(ch);
 }
}

function stringToAscii(str, outPtr) {
 return writeAsciiToMemory(str, outPtr, false);
}

function UTF16ToString(ptr, maxBytesToRead) {
 assert(ptr % 2 == 0, "Pointer passed to UTF16ToString must be aligned to two bytes!");
 var str = "";
 for (var i = 0; !(i >= maxBytesToRead / 2); ++i) {
  var codeUnit = GROWABLE_HEAP_I16()[ptr + i * 2 >>> 1];
  if (codeUnit == 0) break;
  str += String.fromCharCode(codeUnit);
 }
 return str;
}

function stringToUTF16(str, outPtr, maxBytesToWrite) {
 assert(outPtr % 2 == 0, "Pointer passed to stringToUTF16 must be aligned to two bytes!");
 assert(typeof maxBytesToWrite == "number", "stringToUTF16(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!");
 if (maxBytesToWrite === undefined) {
  maxBytesToWrite = 2147483647;
 }
 if (maxBytesToWrite < 2) return 0;
 maxBytesToWrite -= 2;
 var startPtr = outPtr;
 var numCharsToWrite = maxBytesToWrite < str.length * 2 ? maxBytesToWrite / 2 : str.length;
 for (var i = 0; i < numCharsToWrite; ++i) {
  var codeUnit = str.charCodeAt(i);
  GROWABLE_HEAP_I16()[outPtr >>> 1] = codeUnit;
  outPtr += 2;
 }
 GROWABLE_HEAP_I16()[outPtr >>> 1] = 0;
 return outPtr - startPtr;
}

function lengthBytesUTF16(str) {
 return str.length * 2;
}

function UTF32ToString(ptr, maxBytesToRead) {
 assert(ptr % 4 == 0, "Pointer passed to UTF32ToString must be aligned to four bytes!");
 var i = 0;
 var str = "";
 while (!(i >= maxBytesToRead / 4)) {
  var utf32 = GROWABLE_HEAP_I32()[ptr + i * 4 >>> 2];
  if (utf32 == 0) break;
  ++i;
  if (utf32 >= 65536) {
   var ch = utf32 - 65536;
   str += String.fromCharCode(55296 | ch >> 10, 56320 | ch & 1023);
  } else {
   str += String.fromCharCode(utf32);
  }
 }
 return str;
}

function stringToUTF32(str, outPtr, maxBytesToWrite) {
 outPtr >>>= 0;
 assert(outPtr % 4 == 0, "Pointer passed to stringToUTF32 must be aligned to four bytes!");
 assert(typeof maxBytesToWrite == "number", "stringToUTF32(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!");
 if (maxBytesToWrite === undefined) {
  maxBytesToWrite = 2147483647;
 }
 if (maxBytesToWrite < 4) return 0;
 var startPtr = outPtr;
 var endPtr = startPtr + maxBytesToWrite - 4;
 for (var i = 0; i < str.length; ++i) {
  var codeUnit = str.charCodeAt(i);
  if (codeUnit >= 55296 && codeUnit <= 57343) {
   var trailSurrogate = str.charCodeAt(++i);
   codeUnit = 65536 + ((codeUnit & 1023) << 10) | trailSurrogate & 1023;
  }
  GROWABLE_HEAP_I32()[outPtr >>> 2] = codeUnit;
  outPtr += 4;
  if (outPtr + 4 > endPtr) break;
 }
 GROWABLE_HEAP_I32()[outPtr >>> 2] = 0;
 return outPtr - startPtr;
}

function lengthBytesUTF32(str) {
 var len = 0;
 for (var i = 0; i < str.length; ++i) {
  var codeUnit = str.charCodeAt(i);
  if (codeUnit >= 55296 && codeUnit <= 57343) ++i;
  len += 4;
 }
 return len;
}

function allocateUTF8(str) {
 var size = lengthBytesUTF8(str) + 1;
 var ret = _malloc(size);
 if (ret) stringToUTF8Array(str, GROWABLE_HEAP_I8(), ret, size);
 return ret;
}

function allocateUTF8OnStack(str) {
 var size = lengthBytesUTF8(str) + 1;
 var ret = stackAlloc(size);
 stringToUTF8Array(str, GROWABLE_HEAP_I8(), ret, size);
 return ret;
}

function writeStringToMemory(string, buffer, dontAddNull) {
 warnOnce("writeStringToMemory is deprecated and should not be called! Use stringToUTF8() instead!");
 var lastChar, end;
 if (dontAddNull) {
  end = buffer + lengthBytesUTF8(string);
  lastChar = GROWABLE_HEAP_I8()[end >>> 0];
 }
 stringToUTF8(string, buffer, Infinity);
 if (dontAddNull) GROWABLE_HEAP_I8()[end >>> 0] = lastChar;
}

function writeArrayToMemory(array, buffer) {
 assert(array.length >= 0, "writeArrayToMemory array must have a length (should be an array or typed array)");
 GROWABLE_HEAP_I8().set(array, buffer >>> 0);
}

function writeAsciiToMemory(str, buffer, dontAddNull) {
 for (var i = 0; i < str.length; ++i) {
  assert(str.charCodeAt(i) === (str.charCodeAt(i) & 255));
  GROWABLE_HEAP_I8()[buffer++ >>> 0] = str.charCodeAt(i);
 }
 if (!dontAddNull) GROWABLE_HEAP_I8()[buffer >>> 0] = 0;
}

var HEAP, buffer, HEAP8, HEAPU8, HEAP16, HEAPU16, HEAP32, HEAPU32, HEAPF32, HEAPF64;

if (ENVIRONMENT_IS_PTHREAD) {
 buffer = Module["buffer"];
}

function updateGlobalBufferAndViews(buf) {
 buffer = buf;
 Module["HEAP8"] = HEAP8 = new Int8Array(buf);
 Module["HEAP16"] = HEAP16 = new Int16Array(buf);
 Module["HEAP32"] = HEAP32 = new Int32Array(buf);
 Module["HEAPU8"] = HEAPU8 = new Uint8Array(buf);
 Module["HEAPU16"] = HEAPU16 = new Uint16Array(buf);
 Module["HEAPU32"] = HEAPU32 = new Uint32Array(buf);
 Module["HEAPF32"] = HEAPF32 = new Float32Array(buf);
 Module["HEAPF64"] = HEAPF64 = new Float64Array(buf);
}

var TOTAL_STACK = 5242880;

if (Module["TOTAL_STACK"]) assert(TOTAL_STACK === Module["TOTAL_STACK"], "the stack size can no longer be determined at runtime");

var INITIAL_MEMORY = Module["INITIAL_MEMORY"] || 16777216;

legacyModuleProp("INITIAL_MEMORY", "INITIAL_MEMORY");

assert(INITIAL_MEMORY >= TOTAL_STACK, "INITIAL_MEMORY should be larger than TOTAL_STACK, was " + INITIAL_MEMORY + "! (TOTAL_STACK=" + TOTAL_STACK + ")");

assert(typeof Int32Array != "undefined" && typeof Float64Array !== "undefined" && Int32Array.prototype.subarray != undefined && Int32Array.prototype.set != undefined, "JS engine does not provide full typed array support");

if (ENVIRONMENT_IS_PTHREAD) {
 wasmMemory = Module["wasmMemory"];
 buffer = Module["buffer"];
} else {
 if (Module["wasmMemory"]) {
  wasmMemory = Module["wasmMemory"];
 } else {
  wasmMemory = new WebAssembly.Memory({
   "initial": INITIAL_MEMORY / 65536,
   "maximum": 4294967296 / 65536,
   "shared": true
  });
  if (!(wasmMemory.buffer instanceof SharedArrayBuffer)) {
   err("requested a shared WebAssembly.Memory but the returned buffer is not a SharedArrayBuffer, indicating that while the browser has SharedArrayBuffer it does not have WebAssembly threads support - you may need to set a flag");
   if (ENVIRONMENT_IS_NODE) {
    console.log("(on node you may need: --experimental-wasm-threads --experimental-wasm-bulk-memory and also use a recent version)");
   }
   throw Error("bad memory");
  }
 }
}

if (wasmMemory) {
 buffer = wasmMemory.buffer;
}

INITIAL_MEMORY = buffer.byteLength;

assert(INITIAL_MEMORY % 65536 === 0);

updateGlobalBufferAndViews(buffer);

var wasmTable = new WebAssembly.Table({
 "initial": 22,
 "element": "anyfunc"
});

function writeStackCookie() {
 var max = _emscripten_stack_get_end();
 assert((max & 3) == 0);
 GROWABLE_HEAP_I32()[max >>> 2] = 34821223;
 GROWABLE_HEAP_I32()[max + 4 >>> 2] = 2310721022;
 GROWABLE_HEAP_U32()[0 >>> 0] = 1668509029;
}

function checkStackCookie() {
 if (ABORT) return;
 var max = _emscripten_stack_get_end();
 var cookie1 = GROWABLE_HEAP_U32()[max >>> 2];
 var cookie2 = GROWABLE_HEAP_U32()[max + 4 >>> 2];
 if (cookie1 != 34821223 || cookie2 != 2310721022) {
  abort("Stack overflow! Stack cookie has been overwritten at 0x" + max.toString(16) + ", expected hex dwords 0x89BACDFE and 0x2135467, but received 0x" + cookie2.toString(16) + " 0x" + cookie1.toString(16));
 }
 if (GROWABLE_HEAP_U32()[0 >>> 0] !== 1668509029) abort("Runtime error: The application has corrupted its heap memory area (address zero)!");
}

(function() {
 var h16 = new Int16Array(1);
 var h8 = new Int8Array(h16.buffer);
 h16[0] = 25459;
 if (h8[0] !== 115 || h8[1] !== 99) throw "Runtime error: expected the system to be little-endian! (Run with -sSUPPORT_BIG_ENDIAN to bypass)";
})();

var __ATPRERUN__ = [];

var __ATINIT__ = [];

var __ATMAIN__ = [];

var __ATEXIT__ = [];

var __ATPOSTRUN__ = [];

var __RELOC_FUNCS__ = [];

var runtimeInitialized = false;

function keepRuntimeAlive() {
 return noExitRuntime;
}

function preRun() {
 assert(!ENVIRONMENT_IS_PTHREAD);
 if (Module["preRun"]) {
  if (typeof Module["preRun"] == "function") Module["preRun"] = [ Module["preRun"] ];
  while (Module["preRun"].length) {
   addOnPreRun(Module["preRun"].shift());
  }
 }
 callRuntimeCallbacks(__ATPRERUN__);
}

function initRuntime() {
 assert(!runtimeInitialized);
 runtimeInitialized = true;
 if (ENVIRONMENT_IS_PTHREAD) return;
 checkStackCookie();
 callRuntimeCallbacks(__RELOC_FUNCS__);
 if (!Module["noFSInit"] && !FS.init.initialized) FS.init();
 FS.ignorePermissions = false;
 TTY.init();
 callRuntimeCallbacks(__ATINIT__);
}

function preMain() {
 checkStackCookie();
 if (ENVIRONMENT_IS_PTHREAD) return;
 callRuntimeCallbacks(__ATMAIN__);
}

function postRun() {
 checkStackCookie();
 if (ENVIRONMENT_IS_PTHREAD) return;
 if (Module["postRun"]) {
  if (typeof Module["postRun"] == "function") Module["postRun"] = [ Module["postRun"] ];
  while (Module["postRun"].length) {
   addOnPostRun(Module["postRun"].shift());
  }
 }
 callRuntimeCallbacks(__ATPOSTRUN__);
}

function addOnPreRun(cb) {
 __ATPRERUN__.unshift(cb);
}

function addOnInit(cb) {
 __ATINIT__.unshift(cb);
}

function addOnPreMain(cb) {
 __ATMAIN__.unshift(cb);
}

function addOnExit(cb) {}

function addOnPostRun(cb) {
 __ATPOSTRUN__.unshift(cb);
}

assert(Math.imul, "This browser does not support Math.imul(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill");

assert(Math.fround, "This browser does not support Math.fround(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill");

assert(Math.clz32, "This browser does not support Math.clz32(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill");

assert(Math.trunc, "This browser does not support Math.trunc(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill");

var runDependencies = 0;

var runDependencyWatcher = null;

var dependenciesFulfilled = null;

var runDependencyTracking = {};

function getUniqueRunDependency(id) {
 var orig = id;
 while (1) {
  if (!runDependencyTracking[id]) return id;
  id = orig + Math.random();
 }
}

function addRunDependency(id) {
 runDependencies++;
 if (Module["monitorRunDependencies"]) {
  Module["monitorRunDependencies"](runDependencies);
 }
 if (id) {
  assert(!runDependencyTracking[id]);
  runDependencyTracking[id] = 1;
  if (runDependencyWatcher === null && typeof setInterval != "undefined") {
   runDependencyWatcher = setInterval(function() {
    if (ABORT) {
     clearInterval(runDependencyWatcher);
     runDependencyWatcher = null;
     return;
    }
    var shown = false;
    for (var dep in runDependencyTracking) {
     if (!shown) {
      shown = true;
      err("still waiting on run dependencies:");
     }
     err("dependency: " + dep);
    }
    if (shown) {
     err("(end of list)");
    }
   }, 1e4);
  }
 } else {
  err("warning: run dependency added without ID");
 }
}

function removeRunDependency(id) {
 runDependencies--;
 if (Module["monitorRunDependencies"]) {
  Module["monitorRunDependencies"](runDependencies);
 }
 if (id) {
  assert(runDependencyTracking[id]);
  delete runDependencyTracking[id];
 } else {
  err("warning: run dependency removed without ID");
 }
 if (runDependencies == 0) {
  if (runDependencyWatcher !== null) {
   clearInterval(runDependencyWatcher);
   runDependencyWatcher = null;
  }
  if (dependenciesFulfilled) {
   var callback = dependenciesFulfilled;
   dependenciesFulfilled = null;
   callback();
  }
 }
}

function abort(what) {
 if (ENVIRONMENT_IS_PTHREAD) {
  postMessage({
   "cmd": "onAbort",
   "arg": what
  });
 } else {
  if (Module["onAbort"]) {
   Module["onAbort"](what);
  }
 }
 what = "Aborted(" + what + ")";
 err(what);
 ABORT = true;
 EXITSTATUS = 1;
 var e = new WebAssembly.RuntimeError(what);
 readyPromiseReject(e);
 throw e;
}

var dataURIPrefix = "data:application/octet-stream;base64,";

function isDataURI(filename) {
 return filename.startsWith(dataURIPrefix);
}

function isFileURI(filename) {
 return filename.startsWith("file://");
}

function createExportWrapper(name, fixedasm) {
 return function() {
  var displayName = name;
  var asm = fixedasm;
  if (!fixedasm) {
   asm = Module["asm"];
  }
  assert(runtimeInitialized, "native function `" + displayName + "` called before runtime initialization");
  if (!asm[name]) {
   assert(asm[name], "exported native function `" + displayName + "` not found");
  }
  return asm[name].apply(null, arguments);
 };
}

var wasmBinaryFile;

wasmBinaryFile = "main.wasm";

if (!isDataURI(wasmBinaryFile)) {
 wasmBinaryFile = locateFile(wasmBinaryFile);
}

function getBinary(file) {
 try {
  if (file == wasmBinaryFile && wasmBinary) {
   return new Uint8Array(wasmBinary);
  }
  if (readBinary) {
   return readBinary(file);
  } else {
   throw "both async and sync fetching of the wasm failed";
  }
 } catch (err) {
  abort(err);
 }
}

function getBinaryPromise() {
 if (!wasmBinary && (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER)) {
  if (typeof fetch == "function") {
   return fetch(wasmBinaryFile, {
    credentials: "same-origin"
   }).then(function(response) {
    if (!response["ok"]) {
     throw "failed to load wasm binary file at '" + wasmBinaryFile + "'";
    }
    return response["arrayBuffer"]();
   }).catch(function() {
    return getBinary(wasmBinaryFile);
   });
  }
 }
 return Promise.resolve().then(function() {
  return getBinary(wasmBinaryFile);
 });
}

function createWasm() {
 var info = {
  "env": asmLibraryArg,
  "wasi_snapshot_preview1": asmLibraryArg,
  "GOT.mem": new Proxy(asmLibraryArg, GOTHandler),
  "GOT.func": new Proxy(asmLibraryArg, GOTHandler)
 };
 function receiveInstance(instance, module) {
  var exports = instance.exports;
  exports = relocateExports(exports, 1024);
  Module["asm"] = exports;
  var metadata = getDylinkMetadata(module);
  mergeLibSymbols(exports, "main");
  registerTLSInit(Module["asm"]["_emscripten_tls_init"], instance.exports, metadata);
  addOnInit(Module["asm"]["__wasm_call_ctors"]);
  __RELOC_FUNCS__.push(Module["asm"]["__wasm_apply_data_relocs"]);
  wasmModule = module;
  if (!ENVIRONMENT_IS_PTHREAD) {
   var numWorkersToLoad = PThread.unusedWorkers.length;
   PThread.unusedWorkers.forEach(function(w) {
    PThread.loadWasmModuleToWorker(w, function() {
     if (!--numWorkersToLoad) removeRunDependency("wasm-instantiate");
    });
   });
  }
 }
 if (!ENVIRONMENT_IS_PTHREAD) {
  addRunDependency("wasm-instantiate");
 }
 var trueModule = Module;
 function receiveInstantiationResult(result) {
  assert(Module === trueModule, "the Module object should not be replaced during async compilation - perhaps the order of HTML elements is wrong?");
  trueModule = null;
  receiveInstance(result["instance"], result["module"]);
 }
 function instantiateArrayBuffer(receiver) {
  return getBinaryPromise().then(function(binary) {
   return WebAssembly.instantiate(binary, info);
  }).then(function(instance) {
   return instance;
  }).then(receiver, function(reason) {
   err("failed to asynchronously prepare wasm: " + reason);
   if (isFileURI(wasmBinaryFile)) {
    err("warning: Loading from a file URI (" + wasmBinaryFile + ") is not supported in most browsers. See https://emscripten.org/docs/getting_started/FAQ.html#how-do-i-run-a-local-webserver-for-testing-why-does-my-program-stall-in-downloading-or-preparing");
   }
   abort(reason);
  });
 }
 function instantiateAsync() {
  if (!wasmBinary && typeof WebAssembly.instantiateStreaming == "function" && !isDataURI(wasmBinaryFile) && typeof fetch == "function") {
   return fetch(wasmBinaryFile, {
    credentials: "same-origin"
   }).then(function(response) {
    var result = WebAssembly.instantiateStreaming(response, info);
    return result.then(receiveInstantiationResult, function(reason) {
     err("wasm streaming compile failed: " + reason);
     err("falling back to ArrayBuffer instantiation");
     return instantiateArrayBuffer(receiveInstantiationResult);
    });
   });
  } else {
   return instantiateArrayBuffer(receiveInstantiationResult);
  }
 }
 if (Module["instantiateWasm"]) {
  try {
   var exports = Module["instantiateWasm"](info, receiveInstance);
   return exports;
  } catch (e) {
   err("Module.instantiateWasm callback failed with error: " + e);
   return false;
  }
 }
 instantiateAsync().catch(readyPromiseReject);
 return {};
}

var tempDouble;

var tempI64;

var ASM_CONSTS = {};

var GOT = {};

Module["GOT"] = GOT;

var CurrentModuleWeakSymbols = new Set([]);

Module["CurrentModuleWeakSymbols"] = CurrentModuleWeakSymbols;

var GOTHandler = {
 get: function(obj, symName) {
  var rtn = GOT[symName];
  if (!rtn) {
   rtn = GOT[symName] = new WebAssembly.Global({
    "value": "i32",
    "mutable": true
   });
  }
  if (!CurrentModuleWeakSymbols.has(symName)) {
   rtn.required = true;
  }
  return rtn;
 }
};

Module["GOTHandler"] = GOTHandler;

function killThread(pthread_ptr) {
 assert(!ENVIRONMENT_IS_PTHREAD, "Internal Error! killThread() can only ever be called from main application thread!");
 assert(pthread_ptr, "Internal Error! Null pthread_ptr in killThread!");
 var pthread = PThread.pthreads[pthread_ptr];
 delete PThread.pthreads[pthread_ptr];
 pthread.worker.terminate();
 __emscripten_thread_free_data(pthread_ptr);
 PThread.runningWorkers.splice(PThread.runningWorkers.indexOf(pthread.worker), 1);
 pthread.worker.pthread = undefined;
}

Module["killThread"] = killThread;

function cancelThread(pthread_ptr) {
 assert(!ENVIRONMENT_IS_PTHREAD, "Internal Error! cancelThread() can only ever be called from main application thread!");
 assert(pthread_ptr, "Internal Error! Null pthread_ptr in cancelThread!");
 var pthread = PThread.pthreads[pthread_ptr];
 pthread.worker.postMessage({
  "cmd": "cancel"
 });
}

Module["cancelThread"] = cancelThread;

function cleanupThread(pthread_ptr) {
 assert(!ENVIRONMENT_IS_PTHREAD, "Internal Error! cleanupThread() can only ever be called from main application thread!");
 assert(pthread_ptr, "Internal Error! Null pthread_ptr in cleanupThread!");
 var pthread = PThread.pthreads[pthread_ptr];
 assert(pthread);
 var worker = pthread.worker;
 PThread.returnWorkerToPool(worker);
}

Module["cleanupThread"] = cleanupThread;

function zeroMemory(address, size) {
 GROWABLE_HEAP_U8().fill(0, address, address + size);
}

Module["zeroMemory"] = zeroMemory;

function spawnThread(threadParams) {
 assert(!ENVIRONMENT_IS_PTHREAD, "Internal Error! spawnThread() can only ever be called from main application thread!");
 assert(threadParams.pthread_ptr, "Internal error, no pthread ptr!");
 var worker = PThread.getNewWorker();
 if (!worker) {
  return 6;
 }
 assert(!worker.pthread, "Internal error!");
 PThread.runningWorkers.push(worker);
 var pthread = PThread.pthreads[threadParams.pthread_ptr] = {
  worker: worker,
  threadInfoStruct: threadParams.pthread_ptr
 };
 worker.pthread = pthread;
 var msg = {
  "cmd": "run",
  "start_routine": threadParams.startRoutine,
  "arg": threadParams.arg,
  "threadInfoStruct": threadParams.pthread_ptr
 };
 worker.runPthread = () => {
  msg.time = performance.now();
  worker.postMessage(msg, threadParams.transferList);
 };
 if (worker.loaded) {
  worker.runPthread();
  delete worker.runPthread;
 }
 return 0;
}

Module["spawnThread"] = spawnThread;

function _exit(status) {
 exit(status);
}

Module["_exit"] = _exit;

_exit.sig = "vi";

function ptrToString(ptr) {
 return "0x" + ptr.toString(16).padStart(8, "0");
}

Module["ptrToString"] = ptrToString;

function handleException(e) {
 if (e instanceof ExitStatus || e == "unwind") {
  return EXITSTATUS;
 }
 quit_(1, e);
}

Module["handleException"] = handleException;

var PThread = {
 unusedWorkers: [],
 runningWorkers: [],
 tlsInitFunctions: [],
 init: function() {
  if (ENVIRONMENT_IS_PTHREAD) {
   PThread.initWorker();
  } else {
   PThread.initMainThread();
  }
 },
 initMainThread: function() {
  var pthreadPoolSize = navigator.hardwareConcurrency;
  for (var i = 0; i < pthreadPoolSize; ++i) {
   PThread.allocateUnusedWorker();
  }
 },
 initWorker: function() {
  noExitRuntime = false;
 },
 pthreads: {},
 setExitStatus: function(status) {
  EXITSTATUS = status;
 },
 terminateAllThreads: function() {
  assert(!ENVIRONMENT_IS_PTHREAD, "Internal Error! terminateAllThreads() can only ever be called from main application thread!");
  for (var t in PThread.pthreads) {
   var pthread = PThread.pthreads[t];
   if (pthread && pthread.worker) {
    PThread.returnWorkerToPool(pthread.worker);
   }
  }
  assert(Object.keys(PThread.pthreads).length === 0);
  assert(PThread.runningWorkers.length === 0);
  for (var i = 0; i < PThread.unusedWorkers.length; ++i) {
   var worker = PThread.unusedWorkers[i];
   assert(!worker.pthread);
   worker.terminate();
  }
  PThread.unusedWorkers = [];
 },
 returnWorkerToPool: function(worker) {
  var pthread_ptr = worker.pthread.threadInfoStruct;
  delete PThread.pthreads[pthread_ptr];
  PThread.unusedWorkers.push(worker);
  PThread.runningWorkers.splice(PThread.runningWorkers.indexOf(worker), 1);
  worker.pthread = undefined;
  __emscripten_thread_free_data(pthread_ptr);
 },
 receiveObjectTransfer: function(data) {},
 threadInitTLS: function() {
  for (var i in PThread.tlsInitFunctions) {
   if (PThread.tlsInitFunctions.hasOwnProperty(i)) PThread.tlsInitFunctions[i]();
  }
 },
 loadWasmModuleToWorker: function(worker, onFinishedLoading) {
  worker.onmessage = e => {
   var d = e["data"];
   var cmd = d["cmd"];
   if (worker.pthread) PThread.currentProxiedOperationCallerThread = worker.pthread.threadInfoStruct;
   if (d["targetThread"] && d["targetThread"] != _pthread_self()) {
    var thread = PThread.pthreads[d.targetThread];
    if (thread) {
     thread.worker.postMessage(d, d["transferList"]);
    } else {
     err('Internal error! Worker sent a message "' + cmd + '" to target pthread ' + d["targetThread"] + ", but that thread no longer exists!");
    }
    PThread.currentProxiedOperationCallerThread = undefined;
    return;
   }
   if (cmd === "processProxyingQueue") {
    executeNotifiedProxyingQueue(d["queue"]);
   } else if (cmd === "spawnThread") {
    spawnThread(d);
   } else if (cmd === "cleanupThread") {
    cleanupThread(d["thread"]);
   } else if (cmd === "killThread") {
    killThread(d["thread"]);
   } else if (cmd === "cancelThread") {
    cancelThread(d["thread"]);
   } else if (cmd === "loaded") {
    worker.loaded = true;
    if (onFinishedLoading) onFinishedLoading(worker);
    if (worker.runPthread) {
     worker.runPthread();
     delete worker.runPthread;
    }
   } else if (cmd === "print") {
    out("Thread " + d["threadId"] + ": " + d["text"]);
   } else if (cmd === "printErr") {
    err("Thread " + d["threadId"] + ": " + d["text"]);
   } else if (cmd === "alert") {
    alert("Thread " + d["threadId"] + ": " + d["text"]);
   } else if (d.target === "setimmediate") {
    worker.postMessage(d);
   } else if (cmd === "onAbort") {
    if (Module["onAbort"]) {
     Module["onAbort"](d["arg"]);
    }
   } else if (cmd) {
    err("worker sent an unknown command " + cmd);
   }
   PThread.currentProxiedOperationCallerThread = undefined;
  };
  worker.onerror = e => {
   var message = "worker sent an error!";
   if (worker.pthread) {
    var pthread_ptr = worker.pthread.threadInfoStruct;
    if (pthread_ptr) {
     message = "Pthread " + ptrToString(pthread_ptr) + " sent an error!";
    }
   }
   err(message + " " + e.filename + ":" + e.lineno + ": " + e.message);
   throw e;
  };
  assert(wasmMemory instanceof WebAssembly.Memory, "WebAssembly memory should have been loaded by now!");
  assert(wasmModule instanceof WebAssembly.Module, "WebAssembly Module should have been loaded by now!");
  worker.postMessage({
   "cmd": "load",
   "urlOrBlob": Module["mainScriptUrlOrBlob"] || _scriptDir,
   "wasmMemory": wasmMemory,
   "wasmModule": wasmModule,
   "dynamicLibraries": Module["dynamicLibraries"]
  });
 },
 allocateUnusedWorker: function() {
  var pthreadMainJs = locateFile("main.worker.js");
  PThread.unusedWorkers.push(new Worker(pthreadMainJs));
 },
 getNewWorker: function() {
  if (PThread.unusedWorkers.length == 0) {
   err("Tried to spawn a new thread, but the thread pool is exhausted.\n" + "This might result in a deadlock unless some threads eventually exit or the code explicitly breaks out to the event loop.\n" + "If you want to increase the pool size, use setting `-sPTHREAD_POOL_SIZE=...`." + "\nIf you want to throw an explicit error instead of the risk of deadlocking in those cases, use setting `-sPTHREAD_POOL_SIZE_STRICT=2`.");
   PThread.allocateUnusedWorker();
   PThread.loadWasmModuleToWorker(PThread.unusedWorkers[0]);
  }
  return PThread.unusedWorkers.pop();
 }
};

Module["PThread"] = PThread;

function callRuntimeCallbacks(callbacks) {
 while (callbacks.length > 0) {
  callbacks.shift()(Module);
 }
}

Module["callRuntimeCallbacks"] = callRuntimeCallbacks;

function withStackSave(f) {
 var stack = stackSave();
 var ret = f();
 stackRestore(stack);
 return ret;
}

Module["withStackSave"] = withStackSave;

function demangle(func) {
 warnOnce("warning: build with -sDEMANGLE_SUPPORT to link in libcxxabi demangling");
 return func;
}

Module["demangle"] = demangle;

function demangleAll(text) {
 var regex = /\b_Z[\w\d_]+/g;
 return text.replace(regex, function(x) {
  var y = demangle(x);
  return x === y ? x : y + " [" + x + "]";
 });
}

Module["demangleAll"] = demangleAll;

function establishStackSpace() {
 var pthread_ptr = _pthread_self();
 var stackTop = GROWABLE_HEAP_I32()[pthread_ptr + 44 >>> 2];
 var stackSize = GROWABLE_HEAP_I32()[pthread_ptr + 48 >>> 2];
 var stackMax = stackTop - stackSize;
 assert(stackTop != 0);
 assert(stackMax != 0);
 assert(stackTop > stackMax, "stackTop must be higher then stackMax");
 _emscripten_stack_set_limits(stackTop, stackMax);
 stackRestore(stackTop);
 writeStackCookie();
}

Module["establishStackSpace"] = establishStackSpace;

function exitOnMainThread(returnCode) {
 if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(1, 0, returnCode);
 try {
  _exit(returnCode);
 } catch (e) {
  handleException(e);
 }
}

Module["exitOnMainThread"] = exitOnMainThread;

function getDylinkMetadata(binary) {
 var offset = 0;
 var end = 0;
 function getU8() {
  return binary[offset++];
 }
 function getLEB() {
  var ret = 0;
  var mul = 1;
  while (1) {
   var byte = binary[offset++];
   ret += (byte & 127) * mul;
   mul *= 128;
   if (!(byte & 128)) break;
  }
  return ret;
 }
 function getString() {
  var len = getLEB();
  offset += len;
  return UTF8ArrayToString(binary, offset - len, len);
 }
 function failIf(condition, message) {
  if (condition) throw new Error(message);
 }
 var name = "dylink.0";
 if (binary instanceof WebAssembly.Module) {
  var dylinkSection = WebAssembly.Module.customSections(binary, name);
  if (dylinkSection.length === 0) {
   name = "dylink";
   dylinkSection = WebAssembly.Module.customSections(binary, name);
  }
  failIf(dylinkSection.length === 0, "need dylink section");
  binary = new Uint8Array(dylinkSection[0]);
  end = binary.length;
 } else {
  var int32View = new Uint32Array(new Uint8Array(binary.subarray(0, 24)).buffer);
  var magicNumberFound = int32View[0] == 1836278016;
  failIf(!magicNumberFound, "need to see wasm magic number");
  failIf(binary[8] !== 0, "need the dylink section to be first");
  offset = 9;
  var section_size = getLEB();
  end = offset + section_size;
  name = getString();
 }
 var customSection = {
  neededDynlibs: [],
  tlsExports: new Set(),
  weakImports: new Set()
 };
 if (name == "dylink") {
  customSection.memorySize = getLEB();
  customSection.memoryAlign = getLEB();
  customSection.tableSize = getLEB();
  customSection.tableAlign = getLEB();
  var neededDynlibsCount = getLEB();
  for (var i = 0; i < neededDynlibsCount; ++i) {
   var libname = getString();
   customSection.neededDynlibs.push(libname);
  }
 } else {
  failIf(name !== "dylink.0");
  var WASM_DYLINK_MEM_INFO = 1;
  var WASM_DYLINK_NEEDED = 2;
  var WASM_DYLINK_EXPORT_INFO = 3;
  var WASM_DYLINK_IMPORT_INFO = 4;
  var WASM_SYMBOL_TLS = 256;
  var WASM_SYMBOL_BINDING_MASK = 3;
  var WASM_SYMBOL_BINDING_WEAK = 1;
  while (offset < end) {
   var subsectionType = getU8();
   var subsectionSize = getLEB();
   if (subsectionType === WASM_DYLINK_MEM_INFO) {
    customSection.memorySize = getLEB();
    customSection.memoryAlign = getLEB();
    customSection.tableSize = getLEB();
    customSection.tableAlign = getLEB();
   } else if (subsectionType === WASM_DYLINK_NEEDED) {
    var neededDynlibsCount = getLEB();
    for (var i = 0; i < neededDynlibsCount; ++i) {
     libname = getString();
     customSection.neededDynlibs.push(libname);
    }
   } else if (subsectionType === WASM_DYLINK_EXPORT_INFO) {
    var count = getLEB();
    while (count--) {
     var symname = getString();
     var flags = getLEB();
     if (flags & WASM_SYMBOL_TLS) {
      customSection.tlsExports.add(symname);
     }
    }
   } else if (subsectionType === WASM_DYLINK_IMPORT_INFO) {
    var count = getLEB();
    while (count--) {
     var modname = getString();
     var symname = getString();
     var flags = getLEB();
     if ((flags & WASM_SYMBOL_BINDING_MASK) == WASM_SYMBOL_BINDING_WEAK) {
      customSection.weakImports.add(symname);
     }
    }
   } else {
    err("unknown dylink.0 subsection: " + subsectionType);
    offset += subsectionSize;
   }
  }
 }
 var tableAlign = Math.pow(2, customSection.tableAlign);
 assert(tableAlign === 1, "invalid tableAlign " + tableAlign);
 assert(offset == end);
 return customSection;
}

Module["getDylinkMetadata"] = getDylinkMetadata;

function getValue(ptr, type = "i8") {
 if (type.endsWith("*")) type = "*";
 switch (type) {
 case "i1":
  return GROWABLE_HEAP_I8()[ptr >>> 0];

 case "i8":
  return GROWABLE_HEAP_I8()[ptr >>> 0];

 case "i16":
  return GROWABLE_HEAP_I16()[ptr >>> 1];

 case "i32":
  return GROWABLE_HEAP_I32()[ptr >>> 2];

 case "i64":
  return GROWABLE_HEAP_I32()[ptr >>> 2];

 case "float":
  return GROWABLE_HEAP_F32()[ptr >>> 2];

 case "double":
  return GROWABLE_HEAP_F64()[ptr >>> 3];

 case "*":
  return GROWABLE_HEAP_U32()[ptr >>> 2];

 default:
  abort("invalid type for getValue: " + type);
 }
 return null;
}

Module["getValue"] = getValue;

var wasmTableMirror = [];

Module["wasmTableMirror"] = wasmTableMirror;

function getWasmTableEntry(funcPtr) {
 var func = wasmTableMirror[funcPtr];
 if (!func) {
  if (funcPtr >= wasmTableMirror.length) wasmTableMirror.length = funcPtr + 1;
  wasmTableMirror[funcPtr] = func = wasmTable.get(funcPtr);
 }
 assert(wasmTable.get(funcPtr) == func, "JavaScript-side Wasm function table mirror is out of date!");
 return func;
}

Module["getWasmTableEntry"] = getWasmTableEntry;

function invokeEntryPoint(ptr, arg) {
 __emscripten_thread_sync_code();
 var result = getWasmTableEntry(ptr)(arg);
 checkStackCookie();
 if (keepRuntimeAlive()) {
  PThread.setExitStatus(result);
 } else {
  __emscripten_thread_exit(result);
 }
}

Module["invokeEntryPoint"] = invokeEntryPoint;

function jsStackTrace() {
 var error = new Error();
 if (!error.stack) {
  try {
   throw new Error();
  } catch (e) {
   error = e;
  }
  if (!error.stack) {
   return "(no stack trace available)";
  }
 }
 return error.stack.toString();
}

Module["jsStackTrace"] = jsStackTrace;

function asmjsMangle(x) {
 var unmangledSymbols = [ "stackAlloc", "stackSave", "stackRestore" ];
 return x.indexOf("dynCall_") == 0 || unmangledSymbols.includes(x) ? x : "_" + x;
}

Module["asmjsMangle"] = asmjsMangle;

function mergeLibSymbols(exports, libName) {
 for (var sym in exports) {
  if (!exports.hasOwnProperty(sym)) {
   continue;
  }
  if (!asmLibraryArg.hasOwnProperty(sym)) {
   asmLibraryArg[sym] = exports[sym];
  }
  var module_sym = asmjsMangle(sym);
  if (!Module.hasOwnProperty(module_sym)) {
   Module[module_sym] = exports[sym];
  }
 }
}

Module["mergeLibSymbols"] = mergeLibSymbols;

var LDSO = {
 loadedLibsByName: {},
 loadedLibsByHandle: {}
};

Module["LDSO"] = LDSO;

function dynCallLegacy(sig, ptr, args) {
 assert("dynCall_" + sig in Module, "bad function pointer type - no table for sig '" + sig + "'");
 if (args && args.length) {
  assert(args.length === sig.substring(1).replace(/j/g, "--").length);
 } else {
  assert(sig.length == 1);
 }
 var f = Module["dynCall_" + sig];
 return args && args.length ? f.apply(null, [ ptr ].concat(args)) : f.call(null, ptr);
}

Module["dynCallLegacy"] = dynCallLegacy;

function dynCall(sig, ptr, args) {
 if (sig.includes("j")) {
  return dynCallLegacy(sig, ptr, args);
 }
 assert(getWasmTableEntry(ptr), "missing table entry in dynCall: " + ptr);
 var rtn = getWasmTableEntry(ptr).apply(null, args);
 return rtn;
}

Module["dynCall"] = dynCall;

function createInvokeFunction(sig) {
 return function() {
  var sp = stackSave();
  try {
   return dynCall(sig, arguments[0], Array.prototype.slice.call(arguments, 1));
  } catch (e) {
   stackRestore(sp);
   if (e !== e + 0) throw e;
   _setThrew(1, 0);
  }
 };
}

Module["createInvokeFunction"] = createInvokeFunction;

var ___heap_base = 5249792;

Module["___heap_base"] = ___heap_base;

function getMemory(size) {
 if (runtimeInitialized) return _malloc(size);
 var ret = ___heap_base;
 var end = ret + size + 15 & -16;
 assert(end <= GROWABLE_HEAP_I8().length, "failure to getMemory - memory growth etc. is not supported there, call malloc/sbrk directly or increase INITIAL_MEMORY");
 ___heap_base = end;
 GOT["__heap_base"].value = end;
 return ret;
}

Module["getMemory"] = getMemory;

function isInternalSym(symName) {
 return [ "__cpp_exception", "__c_longjmp", "__wasm_apply_data_relocs", "__dso_handle", "__tls_size", "__tls_align", "__set_stack_limits", "_emscripten_tls_init", "__wasm_init_tls", "__wasm_call_ctors" ].includes(symName);
}

Module["isInternalSym"] = isInternalSym;

function updateGOT(exports, replace) {
 for (var symName in exports) {
  if (isInternalSym(symName)) {
   continue;
  }
  var value = exports[symName];
  if (symName.startsWith("orig$")) {
   symName = symName.split("$")[1];
   replace = true;
  }
  if (!GOT[symName]) {
   GOT[symName] = new WebAssembly.Global({
    "value": "i32",
    "mutable": true
   });
  }
  if (replace || GOT[symName].value == 0) {
   if (typeof value == "function") {
    GOT[symName].value = addFunction(value);
   } else if (typeof value == "number") {
    GOT[symName].value = value;
   } else if (typeof value == "bigint") {
    GOT[symName].value = Number(value);
   } else {
    err("unhandled export type for `" + symName + "`: " + typeof value);
   }
  }
 }
}

Module["updateGOT"] = updateGOT;

function relocateExports(exports, memoryBase, replace) {
 var relocated = {};
 for (var e in exports) {
  var value = exports[e];
  if (typeof value == "object") {
   value = value.value;
  }
  if (typeof value == "number") {
   value += memoryBase;
  }
  relocated[e] = value;
 }
 updateGOT(relocated, replace);
 return relocated;
}

Module["relocateExports"] = relocateExports;

function resolveGlobalSymbol(symName, direct) {
 var sym;
 if (direct) {
  sym = asmLibraryArg["orig$" + symName];
 }
 if (!sym) {
  sym = asmLibraryArg[symName];
  if (sym && sym.stub) sym = undefined;
 }
 if (!sym) {
  sym = Module[asmjsMangle(symName)];
 }
 if (!sym && symName.startsWith("invoke_")) {
  sym = createInvokeFunction(symName.split("_")[1]);
 }
 return sym;
}

Module["resolveGlobalSymbol"] = resolveGlobalSymbol;

function alignMemory(size, alignment) {
 assert(alignment, "alignment argument is required");
 return Math.ceil(size / alignment) * alignment;
}

Module["alignMemory"] = alignMemory;

function loadWebAssemblyModule(binary, flags, handle) {
 var metadata = getDylinkMetadata(binary);
 CurrentModuleWeakSymbols = metadata.weakImports;
 var originalTable = wasmTable;
 function loadModule() {
  var needsAllocation = !handle || !GROWABLE_HEAP_I8()[handle + 24 >>> 0];
  if (needsAllocation) {
   var memAlign = Math.pow(2, metadata.memoryAlign);
   memAlign = Math.max(memAlign, STACK_ALIGN);
   var memoryBase = metadata.memorySize ? alignMemory(getMemory(metadata.memorySize + memAlign), memAlign) : 0;
   var tableBase = metadata.tableSize ? wasmTable.length : 0;
   if (handle) {
    GROWABLE_HEAP_I8()[handle + 24 >>> 0] = 1;
    GROWABLE_HEAP_U32()[handle + 28 >>> 2] = memoryBase;
    GROWABLE_HEAP_I32()[handle + 32 >>> 2] = metadata.memorySize;
    GROWABLE_HEAP_U32()[handle + 36 >>> 2] = tableBase;
    GROWABLE_HEAP_I32()[handle + 40 >>> 2] = metadata.tableSize;
   }
  } else {
   memoryBase = GROWABLE_HEAP_U32()[handle + 28 >>> 2];
   tableBase = GROWABLE_HEAP_U32()[handle + 36 >>> 2];
  }
  var tableGrowthNeeded = tableBase + metadata.tableSize - wasmTable.length;
  if (tableGrowthNeeded > 0) {
   wasmTable.grow(tableGrowthNeeded);
  }
  var moduleExports;
  function resolveSymbol(sym) {
   var resolved = resolveGlobalSymbol(sym, false);
   if (!resolved) {
    resolved = moduleExports[sym];
   }
   assert(resolved, "undefined symbol `" + sym + "`. perhaps a side module was not linked in? if this global was expected to arrive from a system library, try to build the MAIN_MODULE with EMCC_FORCE_STDLIBS=1 in the environment");
   return resolved;
  }
  var proxyHandler = {
   "get": function(stubs, prop) {
    switch (prop) {
    case "__memory_base":
     return memoryBase;

    case "__table_base":
     return tableBase;
    }
    if (prop in asmLibraryArg) {
     return asmLibraryArg[prop];
    }
    if (!(prop in stubs)) {
     var resolved;
     stubs[prop] = function() {
      if (!resolved) resolved = resolveSymbol(prop);
      return resolved.apply(null, arguments);
     };
    }
    return stubs[prop];
   }
  };
  var proxy = new Proxy({}, proxyHandler);
  var info = {
   "GOT.mem": new Proxy({}, GOTHandler),
   "GOT.func": new Proxy({}, GOTHandler),
   "env": proxy,
   wasi_snapshot_preview1: proxy
  };
  function postInstantiation(instance) {
   assert(wasmTable === originalTable);
   updateTableMap(tableBase, metadata.tableSize);
   moduleExports = relocateExports(instance.exports, memoryBase);
   if (!flags.allowUndefined) {
    reportUndefinedSymbols();
   }
   registerTLSInit(moduleExports["_emscripten_tls_init"], instance.exports, metadata);
   if (!ENVIRONMENT_IS_PTHREAD) {
    var init = moduleExports["__wasm_call_ctors"];
    if (init) {
     if (runtimeInitialized) {
      init();
     } else {
      __ATINIT__.push(init);
     }
    }
    var applyRelocs = moduleExports["__wasm_apply_data_relocs"];
    if (applyRelocs) {
     if (runtimeInitialized) {
      applyRelocs();
     } else {
      __RELOC_FUNCS__.push(applyRelocs);
     }
    }
   }
   return moduleExports;
  }
  if (flags.loadAsync) {
   if (binary instanceof WebAssembly.Module) {
    var instance = new WebAssembly.Instance(binary, info);
    return Promise.resolve(postInstantiation(instance));
   }
   return WebAssembly.instantiate(binary, info).then(function(result) {
    return postInstantiation(result.instance);
   });
  }
  var module = binary instanceof WebAssembly.Module ? binary : new WebAssembly.Module(binary);
  var instance = new WebAssembly.Instance(module, info);
  return postInstantiation(instance);
 }
 if (flags.loadAsync) {
  return metadata.neededDynlibs.reduce(function(chain, dynNeeded) {
   return chain.then(function() {
    return loadDynamicLibrary(dynNeeded, flags);
   });
  }, Promise.resolve()).then(function() {
   return loadModule();
  });
 }
 metadata.neededDynlibs.forEach(function(dynNeeded) {
  loadDynamicLibrary(dynNeeded, flags);
 });
 return loadModule();
}

Module["loadWebAssemblyModule"] = loadWebAssemblyModule;

function loadDynamicLibrary(lib, flags, handle) {
 flags = flags || {
  global: true,
  nodelete: true
 };
 var dso = LDSO.loadedLibsByName[lib];
 if (dso) {
  if (flags.global && !dso.global) {
   dso.global = true;
   if (dso.module !== "loading") {
    mergeLibSymbols(dso.module, lib);
   }
  }
  if (flags.nodelete && dso.refcount !== Infinity) {
   dso.refcount = Infinity;
  }
  dso.refcount++;
  if (handle) {
   LDSO.loadedLibsByHandle[handle] = dso;
  }
  return flags.loadAsync ? Promise.resolve(true) : true;
 }
 dso = {
  refcount: flags.nodelete ? Infinity : 1,
  name: lib,
  module: "loading",
  global: flags.global
 };
 LDSO.loadedLibsByName[lib] = dso;
 if (handle) {
  LDSO.loadedLibsByHandle[handle] = dso;
 }
 function loadLibData(libFile) {
  if (flags.fs && flags.fs.findObject(libFile)) {
   var libData = flags.fs.readFile(libFile, {
    encoding: "binary"
   });
   if (!(libData instanceof Uint8Array)) {
    libData = new Uint8Array(libData);
   }
   return flags.loadAsync ? Promise.resolve(libData) : libData;
  }
  if (flags.loadAsync) {
   return new Promise(function(resolve, reject) {
    readAsync(libFile, function(data) {
     resolve(new Uint8Array(data));
    }, reject);
   });
  }
  if (!readBinary) {
   throw new Error(libFile + ": file not found, and synchronous loading of external files is not available");
  }
  return readBinary(libFile);
 }
 function getLibModule() {
  if (typeof preloadedWasm != "undefined" && preloadedWasm[lib]) {
   var libModule = preloadedWasm[lib];
   return flags.loadAsync ? Promise.resolve(libModule) : libModule;
  }
  if (flags.loadAsync) {
   return loadLibData(lib).then(function(libData) {
    return loadWebAssemblyModule(libData, flags, handle);
   });
  }
  return loadWebAssemblyModule(loadLibData(lib), flags, handle);
 }
 function moduleLoaded(libModule) {
  if (dso.global) {
   mergeLibSymbols(libModule, lib);
  }
  dso.module = libModule;
 }
 if (flags.loadAsync) {
  return getLibModule().then(function(libModule) {
   moduleLoaded(libModule);
   return true;
  });
 }
 moduleLoaded(getLibModule());
 return true;
}

Module["loadDynamicLibrary"] = loadDynamicLibrary;

function reportUndefinedSymbols() {
 for (var symName in GOT) {
  if (GOT[symName].value == 0) {
   var value = resolveGlobalSymbol(symName, true);
   if (!value && !GOT[symName].required) {
    continue;
   }
   assert(value, "undefined symbol `" + symName + "`. perhaps a side module was not linked in? if this global was expected to arrive from a system library, try to build the MAIN_MODULE with EMCC_FORCE_STDLIBS=1 in the environment");
   if (typeof value == "function") {
    GOT[symName].value = addFunction(value, value.sig);
   } else if (typeof value == "number") {
    GOT[symName].value = value;
   } else {
    throw new Error("bad export type for `" + symName + "`: " + typeof value);
   }
  }
 }
}

Module["reportUndefinedSymbols"] = reportUndefinedSymbols;

function preloadDylibs() {
 if (!dynamicLibraries.length) {
  reportUndefinedSymbols();
  return;
 }
 addRunDependency("preloadDylibs");
 dynamicLibraries.reduce(function(chain, lib) {
  return chain.then(function() {
   return loadDynamicLibrary(lib, {
    loadAsync: true,
    global: true,
    nodelete: true,
    allowUndefined: true
   });
  });
 }, Promise.resolve()).then(function() {
  reportUndefinedSymbols();
  removeRunDependency("preloadDylibs");
 });
}

Module["preloadDylibs"] = preloadDylibs;

function registerTLSInit(tlsInitFunc, moduleExports, metadata) {
 function tlsInitWrapper() {
  var __tls_base = tlsInitFunc();
  if (!__tls_base) {
   assert(__tls_base || metadata.tlsExports.size == 0);
   return;
  }
  var tlsExports = {};
  metadata.tlsExports.forEach(s => tlsExports[s] = moduleExports[s]);
  relocateExports(tlsExports, __tls_base, true);
 }
 PThread.tlsInitFunctions.push(tlsInitWrapper);
 if (runtimeInitialized) {
  tlsInitWrapper();
 }
}

Module["registerTLSInit"] = registerTLSInit;

function setValue(ptr, value, type = "i8") {
 if (type.endsWith("*")) type = "*";
 switch (type) {
 case "i1":
  GROWABLE_HEAP_I8()[ptr >>> 0] = value;
  break;

 case "i8":
  GROWABLE_HEAP_I8()[ptr >>> 0] = value;
  break;

 case "i16":
  GROWABLE_HEAP_I16()[ptr >>> 1] = value;
  break;

 case "i32":
  GROWABLE_HEAP_I32()[ptr >>> 2] = value;
  break;

 case "i64":
  tempI64 = [ value >>> 0, (tempDouble = value, +Math.abs(tempDouble) >= 1 ? tempDouble > 0 ? (Math.min(+Math.floor(tempDouble / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0) ], 
  GROWABLE_HEAP_I32()[ptr >>> 2] = tempI64[0], GROWABLE_HEAP_I32()[ptr + 4 >>> 2] = tempI64[1];
  break;

 case "float":
  GROWABLE_HEAP_F32()[ptr >>> 2] = value;
  break;

 case "double":
  GROWABLE_HEAP_F64()[ptr >>> 3] = value;
  break;

 case "*":
  GROWABLE_HEAP_U32()[ptr >>> 2] = value;
  break;

 default:
  abort("invalid type for setValue: " + type);
 }
}

Module["setValue"] = setValue;

function setWasmTableEntry(idx, func) {
 wasmTable.set(idx, func);
 wasmTableMirror[idx] = wasmTable.get(idx);
}

Module["setWasmTableEntry"] = setWasmTableEntry;

function stackTrace() {
 var js = jsStackTrace();
 if (Module["extraStackTrace"]) js += "\n" + Module["extraStackTrace"]();
 return demangleAll(js);
}

Module["stackTrace"] = stackTrace;

function __ZN4Math7mathAddEii() {
 if (!Module["__ZN4Math7mathAddEii"]) abort("external symbol '_ZN4Math7mathAddEii' is missing. perhaps a side module was not linked in? if this function was expected to arrive from a system library, try to build the MAIN_MODULE with EMCC_FORCE_STDLIBS=1 in the environment");
 return Module["__ZN4Math7mathAddEii"].apply(null, arguments);
}

__ZN4Math7mathAddEii.stub = true;

function __ZN4MathC1Ev() {
 if (!Module["__ZN4MathC1Ev"]) abort("external symbol '_ZN4MathC1Ev' is missing. perhaps a side module was not linked in? if this function was expected to arrive from a system library, try to build the MAIN_MODULE with EMCC_FORCE_STDLIBS=1 in the environment");
 return Module["__ZN4MathC1Ev"].apply(null, arguments);
}

__ZN4MathC1Ev.stub = true;

function __ZN4MathD1Ev() {
 if (!Module["__ZN4MathD1Ev"]) abort("external symbol '_ZN4MathD1Ev' is missing. perhaps a side module was not linked in? if this function was expected to arrive from a system library, try to build the MAIN_MODULE with EMCC_FORCE_STDLIBS=1 in the environment");
 return Module["__ZN4MathD1Ev"].apply(null, arguments);
}

__ZN4MathD1Ev.stub = true;

function ___assert_fail(condition, filename, line, func) {
 abort("Assertion failed: " + UTF8ToString(condition) + ", at: " + [ filename ? UTF8ToString(filename) : "unknown filename", line, func ? UTF8ToString(func) : "unknown function" ]);
}

Module["___assert_fail"] = ___assert_fail;

___assert_fail.sig = "vppip";

function ___emscripten_init_main_thread_js(tb) {
 __emscripten_thread_init(tb, !ENVIRONMENT_IS_WORKER, 1, !ENVIRONMENT_IS_WEB);
 PThread.threadInitTLS();
}

Module["___emscripten_init_main_thread_js"] = ___emscripten_init_main_thread_js;

function ___emscripten_thread_cleanup(thread) {
 if (!ENVIRONMENT_IS_PTHREAD) cleanupThread(thread); else postMessage({
  "cmd": "cleanupThread",
  "thread": thread
 });
}

Module["___emscripten_thread_cleanup"] = ___emscripten_thread_cleanup;

var ___memory_base = new WebAssembly.Global({
 "value": "i32",
 "mutable": false
}, 1024);

Module["___memory_base"] = ___memory_base;

var ___stack_pointer = new WebAssembly.Global({
 "value": "i32",
 "mutable": true
}, 5249792);

Module["___stack_pointer"] = ___stack_pointer;

var ___table_base = new WebAssembly.Global({
 "value": "i32",
 "mutable": false
}, 1);

Module["___table_base"] = ___table_base;

function __embind_register_bigint(primitiveType, name, size, minRange, maxRange) {}

Module["__embind_register_bigint"] = __embind_register_bigint;

function getShiftFromSize(size) {
 switch (size) {
 case 1:
  return 0;

 case 2:
  return 1;

 case 4:
  return 2;

 case 8:
  return 3;

 default:
  throw new TypeError("Unknown type size: " + size);
 }
}

Module["getShiftFromSize"] = getShiftFromSize;

function embind_init_charCodes() {
 var codes = new Array(256);
 for (var i = 0; i < 256; ++i) {
  codes[i] = String.fromCharCode(i);
 }
 embind_charCodes = codes;
}

Module["embind_init_charCodes"] = embind_init_charCodes;

var embind_charCodes = undefined;

Module["embind_charCodes"] = embind_charCodes;

function readLatin1String(ptr) {
 var ret = "";
 var c = ptr;
 while (GROWABLE_HEAP_U8()[c >>> 0]) {
  ret += embind_charCodes[GROWABLE_HEAP_U8()[c++ >>> 0]];
 }
 return ret;
}

Module["readLatin1String"] = readLatin1String;

var awaitingDependencies = {};

Module["awaitingDependencies"] = awaitingDependencies;

var registeredTypes = {};

Module["registeredTypes"] = registeredTypes;

var typeDependencies = {};

Module["typeDependencies"] = typeDependencies;

var char_0 = 48;

Module["char_0"] = char_0;

var char_9 = 57;

Module["char_9"] = char_9;

function makeLegalFunctionName(name) {
 if (undefined === name) {
  return "_unknown";
 }
 name = name.replace(/[^a-zA-Z0-9_]/g, "$");
 var f = name.charCodeAt(0);
 if (f >= char_0 && f <= char_9) {
  return "_" + name;
 }
 return name;
}

Module["makeLegalFunctionName"] = makeLegalFunctionName;

function createNamedFunction(name, body) {
 name = makeLegalFunctionName(name);
 return new Function("body", "return function " + name + "() {\n" + '    "use strict";' + "    return body.apply(this, arguments);\n" + "};\n")(body);
}

Module["createNamedFunction"] = createNamedFunction;

function extendError(baseErrorType, errorName) {
 var errorClass = createNamedFunction(errorName, function(message) {
  this.name = errorName;
  this.message = message;
  var stack = new Error(message).stack;
  if (stack !== undefined) {
   this.stack = this.toString() + "\n" + stack.replace(/^Error(:[^\n]*)?\n/, "");
  }
 });
 errorClass.prototype = Object.create(baseErrorType.prototype);
 errorClass.prototype.constructor = errorClass;
 errorClass.prototype.toString = function() {
  if (this.message === undefined) {
   return this.name;
  } else {
   return this.name + ": " + this.message;
  }
 };
 return errorClass;
}

Module["extendError"] = extendError;

var BindingError = undefined;

Module["BindingError"] = BindingError;

function throwBindingError(message) {
 throw new BindingError(message);
}

Module["throwBindingError"] = throwBindingError;

var InternalError = undefined;

Module["InternalError"] = InternalError;

function throwInternalError(message) {
 throw new InternalError(message);
}

Module["throwInternalError"] = throwInternalError;

function whenDependentTypesAreResolved(myTypes, dependentTypes, getTypeConverters) {
 myTypes.forEach(function(type) {
  typeDependencies[type] = dependentTypes;
 });
 function onComplete(typeConverters) {
  var myTypeConverters = getTypeConverters(typeConverters);
  if (myTypeConverters.length !== myTypes.length) {
   throwInternalError("Mismatched type converter count");
  }
  for (var i = 0; i < myTypes.length; ++i) {
   registerType(myTypes[i], myTypeConverters[i]);
  }
 }
 var typeConverters = new Array(dependentTypes.length);
 var unregisteredTypes = [];
 var registered = 0;
 dependentTypes.forEach((dt, i) => {
  if (registeredTypes.hasOwnProperty(dt)) {
   typeConverters[i] = registeredTypes[dt];
  } else {
   unregisteredTypes.push(dt);
   if (!awaitingDependencies.hasOwnProperty(dt)) {
    awaitingDependencies[dt] = [];
   }
   awaitingDependencies[dt].push(() => {
    typeConverters[i] = registeredTypes[dt];
    ++registered;
    if (registered === unregisteredTypes.length) {
     onComplete(typeConverters);
    }
   });
  }
 });
 if (0 === unregisteredTypes.length) {
  onComplete(typeConverters);
 }
}

Module["whenDependentTypesAreResolved"] = whenDependentTypesAreResolved;

function registerType(rawType, registeredInstance, options = {}) {
 if (!("argPackAdvance" in registeredInstance)) {
  throw new TypeError("registerType registeredInstance requires argPackAdvance");
 }
 var name = registeredInstance.name;
 if (!rawType) {
  throwBindingError('type "' + name + '" must have a positive integer typeid pointer');
 }
 if (registeredTypes.hasOwnProperty(rawType)) {
  if (options.ignoreDuplicateRegistrations) {
   return;
  } else {
   throwBindingError("Cannot register type '" + name + "' twice");
  }
 }
 registeredTypes[rawType] = registeredInstance;
 delete typeDependencies[rawType];
 if (awaitingDependencies.hasOwnProperty(rawType)) {
  var callbacks = awaitingDependencies[rawType];
  delete awaitingDependencies[rawType];
  callbacks.forEach(cb => cb());
 }
}

Module["registerType"] = registerType;

function __embind_register_bool(rawType, name, size, trueValue, falseValue) {
 var shift = getShiftFromSize(size);
 name = readLatin1String(name);
 registerType(rawType, {
  name: name,
  "fromWireType": function(wt) {
   return !!wt;
  },
  "toWireType": function(destructors, o) {
   return o ? trueValue : falseValue;
  },
  "argPackAdvance": 8,
  "readValueFromPointer": function(pointer) {
   var heap;
   if (size === 1) {
    heap = GROWABLE_HEAP_I8();
   } else if (size === 2) {
    heap = GROWABLE_HEAP_I16();
   } else if (size === 4) {
    heap = GROWABLE_HEAP_I32();
   } else {
    throw new TypeError("Unknown boolean type size: " + name);
   }
   return this["fromWireType"](heap[pointer >>> shift]);
  },
  destructorFunction: null
 });
}

Module["__embind_register_bool"] = __embind_register_bool;

__embind_register_bool.sig = "vpppii";

var emval_free_list = [];

Module["emval_free_list"] = emval_free_list;

var emval_handle_array = [ {}, {
 value: undefined
}, {
 value: null
}, {
 value: true
}, {
 value: false
} ];

Module["emval_handle_array"] = emval_handle_array;

function __emval_decref(handle) {
 if (handle > 4 && 0 === --emval_handle_array[handle].refcount) {
  emval_handle_array[handle] = undefined;
  emval_free_list.push(handle);
 }
}

Module["__emval_decref"] = __emval_decref;

__emval_decref.sig = "vp";

function count_emval_handles() {
 var count = 0;
 for (var i = 5; i < emval_handle_array.length; ++i) {
  if (emval_handle_array[i] !== undefined) {
   ++count;
  }
 }
 return count;
}

Module["count_emval_handles"] = count_emval_handles;

function get_first_emval() {
 for (var i = 5; i < emval_handle_array.length; ++i) {
  if (emval_handle_array[i] !== undefined) {
   return emval_handle_array[i];
  }
 }
 return null;
}

Module["get_first_emval"] = get_first_emval;

function init_emval() {
 Module["count_emval_handles"] = count_emval_handles;
 Module["get_first_emval"] = get_first_emval;
}

Module["init_emval"] = init_emval;

var Emval = {
 toValue: handle => {
  if (!handle) {
   throwBindingError("Cannot use deleted val. handle = " + handle);
  }
  return emval_handle_array[handle].value;
 },
 toHandle: value => {
  switch (value) {
  case undefined:
   return 1;

  case null:
   return 2;

  case true:
   return 3;

  case false:
   return 4;

  default:
   {
    var handle = emval_free_list.length ? emval_free_list.pop() : emval_handle_array.length;
    emval_handle_array[handle] = {
     refcount: 1,
     value: value
    };
    return handle;
   }
  }
 }
};

Module["Emval"] = Emval;

function simpleReadValueFromPointer(pointer) {
 return this["fromWireType"](GROWABLE_HEAP_I32()[pointer >>> 2]);
}

Module["simpleReadValueFromPointer"] = simpleReadValueFromPointer;

function __embind_register_emval(rawType, name) {
 name = readLatin1String(name);
 registerType(rawType, {
  name: name,
  "fromWireType": function(handle) {
   var rv = Emval.toValue(handle);
   __emval_decref(handle);
   return rv;
  },
  "toWireType": function(destructors, value) {
   return Emval.toHandle(value);
  },
  "argPackAdvance": 8,
  "readValueFromPointer": simpleReadValueFromPointer,
  destructorFunction: null
 });
}

Module["__embind_register_emval"] = __embind_register_emval;

__embind_register_emval.sig = "vpp";

function embindRepr(v) {
 if (v === null) {
  return "null";
 }
 var t = typeof v;
 if (t === "object" || t === "array" || t === "function") {
  return v.toString();
 } else {
  return "" + v;
 }
}

Module["embindRepr"] = embindRepr;

function floatReadValueFromPointer(name, shift) {
 switch (shift) {
 case 2:
  return function(pointer) {
   return this["fromWireType"](GROWABLE_HEAP_F32()[pointer >>> 2]);
  };

 case 3:
  return function(pointer) {
   return this["fromWireType"](GROWABLE_HEAP_F64()[pointer >>> 3]);
  };

 default:
  throw new TypeError("Unknown float type: " + name);
 }
}

Module["floatReadValueFromPointer"] = floatReadValueFromPointer;

function __embind_register_float(rawType, name, size) {
 var shift = getShiftFromSize(size);
 name = readLatin1String(name);
 registerType(rawType, {
  name: name,
  "fromWireType": function(value) {
   return value;
  },
  "toWireType": function(destructors, value) {
   if (typeof value != "number" && typeof value != "boolean") {
    throw new TypeError('Cannot convert "' + embindRepr(value) + '" to ' + this.name);
   }
   return value;
  },
  "argPackAdvance": 8,
  "readValueFromPointer": floatReadValueFromPointer(name, shift),
  destructorFunction: null
 });
}

Module["__embind_register_float"] = __embind_register_float;

__embind_register_float.sig = "vppp";

function integerReadValueFromPointer(name, shift, signed) {
 switch (shift) {
 case 0:
  return signed ? function readS8FromPointer(pointer) {
   return GROWABLE_HEAP_I8()[pointer >>> 0];
  } : function readU8FromPointer(pointer) {
   return GROWABLE_HEAP_U8()[pointer >>> 0];
  };

 case 1:
  return signed ? function readS16FromPointer(pointer) {
   return GROWABLE_HEAP_I16()[pointer >>> 1];
  } : function readU16FromPointer(pointer) {
   return GROWABLE_HEAP_U16()[pointer >>> 1];
  };

 case 2:
  return signed ? function readS32FromPointer(pointer) {
   return GROWABLE_HEAP_I32()[pointer >>> 2];
  } : function readU32FromPointer(pointer) {
   return GROWABLE_HEAP_U32()[pointer >>> 2];
  };

 default:
  throw new TypeError("Unknown integer type: " + name);
 }
}

Module["integerReadValueFromPointer"] = integerReadValueFromPointer;

function __embind_register_integer(primitiveType, name, size, minRange, maxRange) {
 name = readLatin1String(name);
 if (maxRange === -1) {
  maxRange = 4294967295;
 }
 var shift = getShiftFromSize(size);
 var fromWireType = value => value;
 if (minRange === 0) {
  var bitshift = 32 - 8 * size;
  fromWireType = value => value << bitshift >>> bitshift;
 }
 var isUnsignedType = name.includes("unsigned");
 var checkAssertions = (value, toTypeName) => {
  if (typeof value != "number" && typeof value != "boolean") {
   throw new TypeError('Cannot convert "' + embindRepr(value) + '" to ' + toTypeName);
  }
  if (value < minRange || value > maxRange) {
   throw new TypeError('Passing a number "' + embindRepr(value) + '" from JS side to C/C++ side to an argument of type "' + name + '", which is outside the valid range [' + minRange + ", " + maxRange + "]!");
  }
 };
 var toWireType;
 if (isUnsignedType) {
  toWireType = function(destructors, value) {
   checkAssertions(value, this.name);
   return value >>> 0;
  };
 } else {
  toWireType = function(destructors, value) {
   checkAssertions(value, this.name);
   return value;
  };
 }
 registerType(primitiveType, {
  name: name,
  "fromWireType": fromWireType,
  "toWireType": toWireType,
  "argPackAdvance": 8,
  "readValueFromPointer": integerReadValueFromPointer(name, shift, minRange !== 0),
  destructorFunction: null
 });
}

Module["__embind_register_integer"] = __embind_register_integer;

__embind_register_integer.sig = "vpppii";

function __embind_register_memory_view(rawType, dataTypeIndex, name) {
 var typeMapping = [ Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array ];
 var TA = typeMapping[dataTypeIndex];
 function decodeMemoryView(handle) {
  handle = handle >> 2;
  var heap = GROWABLE_HEAP_U32();
  var size = heap[handle >>> 0];
  var data = heap[handle + 1 >>> 0];
  return new TA(buffer, data, size);
 }
 name = readLatin1String(name);
 registerType(rawType, {
  name: name,
  "fromWireType": decodeMemoryView,
  "argPackAdvance": 8,
  "readValueFromPointer": decodeMemoryView
 }, {
  ignoreDuplicateRegistrations: true
 });
}

Module["__embind_register_memory_view"] = __embind_register_memory_view;

__embind_register_memory_view.sig = "vpip";

function __embind_register_std_string(rawType, name) {
 name = readLatin1String(name);
 var stdStringIsUTF8 = name === "std::string";
 registerType(rawType, {
  name: name,
  "fromWireType": function(value) {
   var length = GROWABLE_HEAP_U32()[value >>> 2];
   var payload = value + 4;
   var str;
   if (stdStringIsUTF8) {
    var decodeStartPtr = payload;
    for (var i = 0; i <= length; ++i) {
     var currentBytePtr = payload + i;
     if (i == length || GROWABLE_HEAP_U8()[currentBytePtr >>> 0] == 0) {
      var maxRead = currentBytePtr - decodeStartPtr;
      var stringSegment = UTF8ToString(decodeStartPtr, maxRead);
      if (str === undefined) {
       str = stringSegment;
      } else {
       str += String.fromCharCode(0);
       str += stringSegment;
      }
      decodeStartPtr = currentBytePtr + 1;
     }
    }
   } else {
    var a = new Array(length);
    for (var i = 0; i < length; ++i) {
     a[i] = String.fromCharCode(GROWABLE_HEAP_U8()[payload + i >>> 0]);
    }
    str = a.join("");
   }
   _free(value);
   return str;
  },
  "toWireType": function(destructors, value) {
   if (value instanceof ArrayBuffer) {
    value = new Uint8Array(value);
   }
   var length;
   var valueIsOfTypeString = typeof value == "string";
   if (!(valueIsOfTypeString || value instanceof Uint8Array || value instanceof Uint8ClampedArray || value instanceof Int8Array)) {
    throwBindingError("Cannot pass non-string to std::string");
   }
   if (stdStringIsUTF8 && valueIsOfTypeString) {
    length = lengthBytesUTF8(value);
   } else {
    length = value.length;
   }
   var base = _malloc(4 + length + 1);
   var ptr = base + 4;
   ptr >>>= 0;
   GROWABLE_HEAP_U32()[base >>> 2] = length;
   if (stdStringIsUTF8 && valueIsOfTypeString) {
    stringToUTF8(value, ptr, length + 1);
   } else {
    if (valueIsOfTypeString) {
     for (var i = 0; i < length; ++i) {
      var charCode = value.charCodeAt(i);
      if (charCode > 255) {
       _free(ptr);
       throwBindingError("String has UTF-16 code units that do not fit in 8 bits");
      }
      GROWABLE_HEAP_U8()[ptr + i >>> 0] = charCode;
     }
    } else {
     for (var i = 0; i < length; ++i) {
      GROWABLE_HEAP_U8()[ptr + i >>> 0] = value[i];
     }
    }
   }
   if (destructors !== null) {
    destructors.push(_free, base);
   }
   return base;
  },
  "argPackAdvance": 8,
  "readValueFromPointer": simpleReadValueFromPointer,
  destructorFunction: function(ptr) {
   _free(ptr);
  }
 });
}

Module["__embind_register_std_string"] = __embind_register_std_string;

__embind_register_std_string.sig = "vpp";

function __embind_register_std_wstring(rawType, charSize, name) {
 name = readLatin1String(name);
 var decodeString, encodeString, getHeap, lengthBytesUTF, shift;
 if (charSize === 2) {
  decodeString = UTF16ToString;
  encodeString = stringToUTF16;
  lengthBytesUTF = lengthBytesUTF16;
  getHeap = () => GROWABLE_HEAP_U16();
  shift = 1;
 } else if (charSize === 4) {
  decodeString = UTF32ToString;
  encodeString = stringToUTF32;
  lengthBytesUTF = lengthBytesUTF32;
  getHeap = () => GROWABLE_HEAP_U32();
  shift = 2;
 }
 registerType(rawType, {
  name: name,
  "fromWireType": function(value) {
   var length = GROWABLE_HEAP_U32()[value >>> 2];
   var HEAP = getHeap();
   var str;
   var decodeStartPtr = value + 4;
   for (var i = 0; i <= length; ++i) {
    var currentBytePtr = value + 4 + i * charSize;
    if (i == length || HEAP[currentBytePtr >>> shift] == 0) {
     var maxReadBytes = currentBytePtr - decodeStartPtr;
     var stringSegment = decodeString(decodeStartPtr, maxReadBytes);
     if (str === undefined) {
      str = stringSegment;
     } else {
      str += String.fromCharCode(0);
      str += stringSegment;
     }
     decodeStartPtr = currentBytePtr + charSize;
    }
   }
   _free(value);
   return str;
  },
  "toWireType": function(destructors, value) {
   if (!(typeof value == "string")) {
    throwBindingError("Cannot pass non-string to C++ string type " + name);
   }
   var length = lengthBytesUTF(value);
   var ptr = _malloc(4 + length + charSize);
   ptr >>>= 0;
   GROWABLE_HEAP_U32()[ptr >>> 2] = length >> shift;
   encodeString(value, ptr + 4, length + charSize);
   if (destructors !== null) {
    destructors.push(_free, ptr);
   }
   return ptr;
  },
  "argPackAdvance": 8,
  "readValueFromPointer": simpleReadValueFromPointer,
  destructorFunction: function(ptr) {
   _free(ptr);
  }
 });
}

Module["__embind_register_std_wstring"] = __embind_register_std_wstring;

__embind_register_std_wstring.sig = "vppp";

function __embind_register_void(rawType, name) {
 name = readLatin1String(name);
 registerType(rawType, {
  isVoid: true,
  name: name,
  "argPackAdvance": 0,
  "fromWireType": function() {
   return undefined;
  },
  "toWireType": function(destructors, o) {
   return undefined;
  }
 });
}

Module["__embind_register_void"] = __embind_register_void;

__embind_register_void.sig = "vpp";

function __emscripten_date_now() {
 return Date.now();
}

Module["__emscripten_date_now"] = __emscripten_date_now;

__emscripten_date_now.sig = "j";

var nowIsMonotonic = true;

Module["nowIsMonotonic"] = nowIsMonotonic;

function __emscripten_get_now_is_monotonic() {
 return nowIsMonotonic;
}

Module["__emscripten_get_now_is_monotonic"] = __emscripten_get_now_is_monotonic;

function executeNotifiedProxyingQueue(queue) {
 Atomics.store(GROWABLE_HEAP_I32(), queue >> 2, 1);
 if (_pthread_self()) {
  __emscripten_proxy_execute_task_queue(queue);
 }
 Atomics.compareExchange(GROWABLE_HEAP_I32(), queue >> 2, 1, 0);
}

Module["executeNotifiedProxyingQueue"] = executeNotifiedProxyingQueue;

function __emscripten_notify_task_queue(targetThreadId, currThreadId, mainThreadId, queue) {
 if (targetThreadId == currThreadId) {
  setTimeout(() => executeNotifiedProxyingQueue(queue));
 } else if (ENVIRONMENT_IS_PTHREAD) {
  postMessage({
   "targetThread": targetThreadId,
   "cmd": "processProxyingQueue",
   "queue": queue
  });
 } else {
  var pthread = PThread.pthreads[targetThreadId];
  var worker = pthread && pthread.worker;
  if (!worker) {
   err("Cannot send message to thread with ID " + targetThreadId + ", unknown thread ID!");
   return;
  }
  worker.postMessage({
   "cmd": "processProxyingQueue",
   "queue": queue
  });
 }
 return 1;
}

Module["__emscripten_notify_task_queue"] = __emscripten_notify_task_queue;

function __emscripten_set_offscreencanvas_size(target, width, height) {
 err("emscripten_set_offscreencanvas_size: Build with -sOFFSCREENCANVAS_SUPPORT=1 to enable transferring canvases to pthreads.");
 return -1;
}

Module["__emscripten_set_offscreencanvas_size"] = __emscripten_set_offscreencanvas_size;

__emscripten_set_offscreencanvas_size.sig = "iiii";

var _emscripten_get_now;

if (ENVIRONMENT_IS_PTHREAD) {
 _emscripten_get_now = () => performance.now() - Module["__performance_now_clock_drift"];
} else _emscripten_get_now = () => performance.now();

Module["_emscripten_get_now"] = _emscripten_get_now;

_emscripten_get_now.sig = "d";

function _emscripten_memcpy_big(dest, src, num) {
 GROWABLE_HEAP_U8().copyWithin(dest >>> 0, src >>> 0, src + num >>> 0);
}

Module["_emscripten_memcpy_big"] = _emscripten_memcpy_big;

_emscripten_memcpy_big.sig = "vppp";

function _emscripten_proxy_to_main_thread_js(index, sync) {
 var numCallArgs = arguments.length - 2;
 var outerArgs = arguments;
 if (numCallArgs > 20 - 1) throw "emscripten_proxy_to_main_thread_js: Too many arguments " + numCallArgs + " to proxied function idx=" + index + ", maximum supported is " + (20 - 1) + "!";
 return withStackSave(function() {
  var serializedNumCallArgs = numCallArgs;
  var args = stackAlloc(serializedNumCallArgs * 8);
  var b = args >> 3;
  for (var i = 0; i < numCallArgs; i++) {
   var arg = outerArgs[2 + i];
   GROWABLE_HEAP_F64()[b + i >>> 0] = arg;
  }
  return _emscripten_run_in_main_runtime_thread_js(index, serializedNumCallArgs, args, sync);
 });
}

Module["_emscripten_proxy_to_main_thread_js"] = _emscripten_proxy_to_main_thread_js;

var _emscripten_receive_on_main_thread_js_callArgs = [];

Module["_emscripten_receive_on_main_thread_js_callArgs"] = _emscripten_receive_on_main_thread_js_callArgs;

function _emscripten_receive_on_main_thread_js(index, numCallArgs, args) {
 _emscripten_receive_on_main_thread_js_callArgs.length = numCallArgs;
 var b = args >> 3;
 for (var i = 0; i < numCallArgs; i++) {
  _emscripten_receive_on_main_thread_js_callArgs[i] = GROWABLE_HEAP_F64()[b + i >>> 0];
 }
 var isEmAsmConst = index < 0;
 var func = !isEmAsmConst ? proxiedFunctionTable[index] : ASM_CONSTS[-index - 1];
 assert(func.length == numCallArgs, "Call args mismatch in emscripten_receive_on_main_thread_js");
 return func.apply(null, _emscripten_receive_on_main_thread_js_callArgs);
}

Module["_emscripten_receive_on_main_thread_js"] = _emscripten_receive_on_main_thread_js;

function getHeapMax() {
 return 4294901760;
}

Module["getHeapMax"] = getHeapMax;

function emscripten_realloc_buffer(size) {
 try {
  wasmMemory.grow(size - buffer.byteLength + 65535 >>> 16);
  updateGlobalBufferAndViews(wasmMemory.buffer);
  return 1;
 } catch (e) {
  err("emscripten_realloc_buffer: Attempted to grow heap from " + buffer.byteLength + " bytes to " + size + " bytes, but got error: " + e);
 }
}

Module["emscripten_realloc_buffer"] = emscripten_realloc_buffer;

function _emscripten_resize_heap(requestedSize) {
 var oldSize = GROWABLE_HEAP_U8().length;
 requestedSize = requestedSize >>> 0;
 if (requestedSize <= oldSize) {
  return false;
 }
 var maxHeapSize = getHeapMax();
 if (requestedSize > maxHeapSize) {
  err("Cannot enlarge memory, asked to go up to " + requestedSize + " bytes, but the limit is " + maxHeapSize + " bytes!");
  return false;
 }
 let alignUp = (x, multiple) => x + (multiple - x % multiple) % multiple;
 for (var cutDown = 1; cutDown <= 4; cutDown *= 2) {
  var overGrownHeapSize = oldSize * (1 + .2 / cutDown);
  overGrownHeapSize = Math.min(overGrownHeapSize, requestedSize + 100663296);
  var newSize = Math.min(maxHeapSize, alignUp(Math.max(requestedSize, overGrownHeapSize), 65536));
  var replacement = emscripten_realloc_buffer(newSize);
  if (replacement) {
   return true;
  }
 }
 err("Failed to grow the heap from " + oldSize + " bytes to " + newSize + " bytes, not enough memory!");
 return false;
}

Module["_emscripten_resize_heap"] = _emscripten_resize_heap;

_emscripten_resize_heap.sig = "ip";

function _emscripten_unwind_to_js_event_loop() {
 throw "unwind";
}

Module["_emscripten_unwind_to_js_event_loop"] = _emscripten_unwind_to_js_event_loop;

function doWritev(stream, iov, iovcnt, offset) {
 var ret = 0;
 for (var i = 0; i < iovcnt; i++) {
  var ptr = GROWABLE_HEAP_U32()[iov >>> 2];
  var len = GROWABLE_HEAP_U32()[iov + 4 >>> 2];
  iov += 8;
  var curr = FS.write(stream, GROWABLE_HEAP_I8(), ptr, len, offset);
  if (curr < 0) return -1;
  ret += curr;
 }
 return ret;
}

Module["doWritev"] = doWritev;

var PATH = {
 isAbs: path => path.charAt(0) === "/",
 splitPath: filename => {
  var splitPathRe = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
  return splitPathRe.exec(filename).slice(1);
 },
 normalizeArray: (parts, allowAboveRoot) => {
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
   var last = parts[i];
   if (last === ".") {
    parts.splice(i, 1);
   } else if (last === "..") {
    parts.splice(i, 1);
    up++;
   } else if (up) {
    parts.splice(i, 1);
    up--;
   }
  }
  if (allowAboveRoot) {
   for (;up; up--) {
    parts.unshift("..");
   }
  }
  return parts;
 },
 normalize: path => {
  var isAbsolute = PATH.isAbs(path), trailingSlash = path.substr(-1) === "/";
  path = PATH.normalizeArray(path.split("/").filter(p => !!p), !isAbsolute).join("/");
  if (!path && !isAbsolute) {
   path = ".";
  }
  if (path && trailingSlash) {
   path += "/";
  }
  return (isAbsolute ? "/" : "") + path;
 },
 dirname: path => {
  var result = PATH.splitPath(path), root = result[0], dir = result[1];
  if (!root && !dir) {
   return ".";
  }
  if (dir) {
   dir = dir.substr(0, dir.length - 1);
  }
  return root + dir;
 },
 basename: path => {
  if (path === "/") return "/";
  path = PATH.normalize(path);
  path = path.replace(/\/$/, "");
  var lastSlash = path.lastIndexOf("/");
  if (lastSlash === -1) return path;
  return path.substr(lastSlash + 1);
 },
 join: function() {
  var paths = Array.prototype.slice.call(arguments, 0);
  return PATH.normalize(paths.join("/"));
 },
 join2: (l, r) => {
  return PATH.normalize(l + "/" + r);
 }
};

Module["PATH"] = PATH;

function getRandomDevice() {
 if (typeof crypto == "object" && typeof crypto["getRandomValues"] == "function") {
  var randomBuffer = new Uint8Array(1);
  return function() {
   crypto.getRandomValues(randomBuffer);
   return randomBuffer[0];
  };
 } else return function() {
  abort("no cryptographic support found for randomDevice. consider polyfilling it if you want to use something insecure like Math.random(), e.g. put this in a --pre-js: var crypto = { getRandomValues: function(array) { for (var i = 0; i < array.length; i++) array[i] = (Math.random()*256)|0 } };");
 };
}

Module["getRandomDevice"] = getRandomDevice;

var PATH_FS = {
 resolve: function() {
  var resolvedPath = "", resolvedAbsolute = false;
  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
   var path = i >= 0 ? arguments[i] : FS.cwd();
   if (typeof path != "string") {
    throw new TypeError("Arguments to path.resolve must be strings");
   } else if (!path) {
    return "";
   }
   resolvedPath = path + "/" + resolvedPath;
   resolvedAbsolute = PATH.isAbs(path);
  }
  resolvedPath = PATH.normalizeArray(resolvedPath.split("/").filter(p => !!p), !resolvedAbsolute).join("/");
  return (resolvedAbsolute ? "/" : "") + resolvedPath || ".";
 },
 relative: (from, to) => {
  from = PATH_FS.resolve(from).substr(1);
  to = PATH_FS.resolve(to).substr(1);
  function trim(arr) {
   var start = 0;
   for (;start < arr.length; start++) {
    if (arr[start] !== "") break;
   }
   var end = arr.length - 1;
   for (;end >= 0; end--) {
    if (arr[end] !== "") break;
   }
   if (start > end) return [];
   return arr.slice(start, end - start + 1);
  }
  var fromParts = trim(from.split("/"));
  var toParts = trim(to.split("/"));
  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
   if (fromParts[i] !== toParts[i]) {
    samePartsLength = i;
    break;
   }
  }
  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
   outputParts.push("..");
  }
  outputParts = outputParts.concat(toParts.slice(samePartsLength));
  return outputParts.join("/");
 }
};

Module["PATH_FS"] = PATH_FS;

var TTY = {
 ttys: [],
 init: function() {},
 shutdown: function() {},
 register: function(dev, ops) {
  TTY.ttys[dev] = {
   input: [],
   output: [],
   ops: ops
  };
  FS.registerDevice(dev, TTY.stream_ops);
 },
 stream_ops: {
  open: function(stream) {
   var tty = TTY.ttys[stream.node.rdev];
   if (!tty) {
    throw new FS.ErrnoError(43);
   }
   stream.tty = tty;
   stream.seekable = false;
  },
  close: function(stream) {
   stream.tty.ops.flush(stream.tty);
  },
  flush: function(stream) {
   stream.tty.ops.flush(stream.tty);
  },
  read: function(stream, buffer, offset, length, pos) {
   if (!stream.tty || !stream.tty.ops.get_char) {
    throw new FS.ErrnoError(60);
   }
   var bytesRead = 0;
   for (var i = 0; i < length; i++) {
    var result;
    try {
     result = stream.tty.ops.get_char(stream.tty);
    } catch (e) {
     throw new FS.ErrnoError(29);
    }
    if (result === undefined && bytesRead === 0) {
     throw new FS.ErrnoError(6);
    }
    if (result === null || result === undefined) break;
    bytesRead++;
    buffer[offset + i] = result;
   }
   if (bytesRead) {
    stream.node.timestamp = Date.now();
   }
   return bytesRead;
  },
  write: function(stream, buffer, offset, length, pos) {
   if (!stream.tty || !stream.tty.ops.put_char) {
    throw new FS.ErrnoError(60);
   }
   try {
    for (var i = 0; i < length; i++) {
     stream.tty.ops.put_char(stream.tty, buffer[offset + i]);
    }
   } catch (e) {
    throw new FS.ErrnoError(29);
   }
   if (length) {
    stream.node.timestamp = Date.now();
   }
   return i;
  }
 },
 default_tty_ops: {
  get_char: function(tty) {
   if (!tty.input.length) {
    var result = null;
    if (typeof window != "undefined" && typeof window.prompt == "function") {
     result = window.prompt("Input: ");
     if (result !== null) {
      result += "\n";
     }
    } else if (typeof readline == "function") {
     result = readline();
     if (result !== null) {
      result += "\n";
     }
    }
    if (!result) {
     return null;
    }
    tty.input = intArrayFromString(result, true);
   }
   return tty.input.shift();
  },
  put_char: function(tty, val) {
   if (val === null || val === 10) {
    out(UTF8ArrayToString(tty.output, 0));
    tty.output = [];
   } else {
    if (val != 0) tty.output.push(val);
   }
  },
  flush: function(tty) {
   if (tty.output && tty.output.length > 0) {
    out(UTF8ArrayToString(tty.output, 0));
    tty.output = [];
   }
  }
 },
 default_tty1_ops: {
  put_char: function(tty, val) {
   if (val === null || val === 10) {
    err(UTF8ArrayToString(tty.output, 0));
    tty.output = [];
   } else {
    if (val != 0) tty.output.push(val);
   }
  },
  flush: function(tty) {
   if (tty.output && tty.output.length > 0) {
    err(UTF8ArrayToString(tty.output, 0));
    tty.output = [];
   }
  }
 }
};

Module["TTY"] = TTY;

function mmapAlloc(size) {
 size = alignMemory(size, 65536);
 var ptr = _emscripten_builtin_memalign(65536, size);
 if (!ptr) return 0;
 zeroMemory(ptr, size);
 return ptr;
}

Module["mmapAlloc"] = mmapAlloc;

var MEMFS = {
 ops_table: null,
 mount: function(mount) {
  return MEMFS.createNode(null, "/", 16384 | 511, 0);
 },
 createNode: function(parent, name, mode, dev) {
  if (FS.isBlkdev(mode) || FS.isFIFO(mode)) {
   throw new FS.ErrnoError(63);
  }
  if (!MEMFS.ops_table) {
   MEMFS.ops_table = {
    dir: {
     node: {
      getattr: MEMFS.node_ops.getattr,
      setattr: MEMFS.node_ops.setattr,
      lookup: MEMFS.node_ops.lookup,
      mknod: MEMFS.node_ops.mknod,
      rename: MEMFS.node_ops.rename,
      unlink: MEMFS.node_ops.unlink,
      rmdir: MEMFS.node_ops.rmdir,
      readdir: MEMFS.node_ops.readdir,
      symlink: MEMFS.node_ops.symlink
     },
     stream: {
      llseek: MEMFS.stream_ops.llseek
     }
    },
    file: {
     node: {
      getattr: MEMFS.node_ops.getattr,
      setattr: MEMFS.node_ops.setattr
     },
     stream: {
      llseek: MEMFS.stream_ops.llseek,
      read: MEMFS.stream_ops.read,
      write: MEMFS.stream_ops.write,
      allocate: MEMFS.stream_ops.allocate,
      mmap: MEMFS.stream_ops.mmap,
      msync: MEMFS.stream_ops.msync
     }
    },
    link: {
     node: {
      getattr: MEMFS.node_ops.getattr,
      setattr: MEMFS.node_ops.setattr,
      readlink: MEMFS.node_ops.readlink
     },
     stream: {}
    },
    chrdev: {
     node: {
      getattr: MEMFS.node_ops.getattr,
      setattr: MEMFS.node_ops.setattr
     },
     stream: FS.chrdev_stream_ops
    }
   };
  }
  var node = FS.createNode(parent, name, mode, dev);
  if (FS.isDir(node.mode)) {
   node.node_ops = MEMFS.ops_table.dir.node;
   node.stream_ops = MEMFS.ops_table.dir.stream;
   node.contents = {};
  } else if (FS.isFile(node.mode)) {
   node.node_ops = MEMFS.ops_table.file.node;
   node.stream_ops = MEMFS.ops_table.file.stream;
   node.usedBytes = 0;
   node.contents = null;
  } else if (FS.isLink(node.mode)) {
   node.node_ops = MEMFS.ops_table.link.node;
   node.stream_ops = MEMFS.ops_table.link.stream;
  } else if (FS.isChrdev(node.mode)) {
   node.node_ops = MEMFS.ops_table.chrdev.node;
   node.stream_ops = MEMFS.ops_table.chrdev.stream;
  }
  node.timestamp = Date.now();
  if (parent) {
   parent.contents[name] = node;
   parent.timestamp = node.timestamp;
  }
  return node;
 },
 getFileDataAsTypedArray: function(node) {
  if (!node.contents) return new Uint8Array(0);
  if (node.contents.subarray) return node.contents.subarray(0, node.usedBytes);
  return new Uint8Array(node.contents);
 },
 expandFileStorage: function(node, newCapacity) {
  newCapacity >>>= 0;
  var prevCapacity = node.contents ? node.contents.length : 0;
  if (prevCapacity >= newCapacity) return;
  var CAPACITY_DOUBLING_MAX = 1024 * 1024;
  newCapacity = Math.max(newCapacity, prevCapacity * (prevCapacity < CAPACITY_DOUBLING_MAX ? 2 : 1.125) >>> 0);
  if (prevCapacity != 0) newCapacity = Math.max(newCapacity, 256);
  var oldContents = node.contents;
  node.contents = new Uint8Array(newCapacity);
  if (node.usedBytes > 0) node.contents.set(oldContents.subarray(0, node.usedBytes), 0);
 },
 resizeFileStorage: function(node, newSize) {
  newSize >>>= 0;
  if (node.usedBytes == newSize) return;
  if (newSize == 0) {
   node.contents = null;
   node.usedBytes = 0;
  } else {
   var oldContents = node.contents;
   node.contents = new Uint8Array(newSize);
   if (oldContents) {
    node.contents.set(oldContents.subarray(0, Math.min(newSize, node.usedBytes)));
   }
   node.usedBytes = newSize;
  }
 },
 node_ops: {
  getattr: function(node) {
   var attr = {};
   attr.dev = FS.isChrdev(node.mode) ? node.id : 1;
   attr.ino = node.id;
   attr.mode = node.mode;
   attr.nlink = 1;
   attr.uid = 0;
   attr.gid = 0;
   attr.rdev = node.rdev;
   if (FS.isDir(node.mode)) {
    attr.size = 4096;
   } else if (FS.isFile(node.mode)) {
    attr.size = node.usedBytes;
   } else if (FS.isLink(node.mode)) {
    attr.size = node.link.length;
   } else {
    attr.size = 0;
   }
   attr.atime = new Date(node.timestamp);
   attr.mtime = new Date(node.timestamp);
   attr.ctime = new Date(node.timestamp);
   attr.blksize = 4096;
   attr.blocks = Math.ceil(attr.size / attr.blksize);
   return attr;
  },
  setattr: function(node, attr) {
   if (attr.mode !== undefined) {
    node.mode = attr.mode;
   }
   if (attr.timestamp !== undefined) {
    node.timestamp = attr.timestamp;
   }
   if (attr.size !== undefined) {
    MEMFS.resizeFileStorage(node, attr.size);
   }
  },
  lookup: function(parent, name) {
   throw FS.genericErrors[44];
  },
  mknod: function(parent, name, mode, dev) {
   return MEMFS.createNode(parent, name, mode, dev);
  },
  rename: function(old_node, new_dir, new_name) {
   if (FS.isDir(old_node.mode)) {
    var new_node;
    try {
     new_node = FS.lookupNode(new_dir, new_name);
    } catch (e) {}
    if (new_node) {
     for (var i in new_node.contents) {
      throw new FS.ErrnoError(55);
     }
    }
   }
   delete old_node.parent.contents[old_node.name];
   old_node.parent.timestamp = Date.now();
   old_node.name = new_name;
   new_dir.contents[new_name] = old_node;
   new_dir.timestamp = old_node.parent.timestamp;
   old_node.parent = new_dir;
  },
  unlink: function(parent, name) {
   delete parent.contents[name];
   parent.timestamp = Date.now();
  },
  rmdir: function(parent, name) {
   var node = FS.lookupNode(parent, name);
   for (var i in node.contents) {
    throw new FS.ErrnoError(55);
   }
   delete parent.contents[name];
   parent.timestamp = Date.now();
  },
  readdir: function(node) {
   var entries = [ ".", ".." ];
   for (var key in node.contents) {
    if (!node.contents.hasOwnProperty(key)) {
     continue;
    }
    entries.push(key);
   }
   return entries;
  },
  symlink: function(parent, newname, oldpath) {
   var node = MEMFS.createNode(parent, newname, 511 | 40960, 0);
   node.link = oldpath;
   return node;
  },
  readlink: function(node) {
   if (!FS.isLink(node.mode)) {
    throw new FS.ErrnoError(28);
   }
   return node.link;
  }
 },
 stream_ops: {
  read: function(stream, buffer, offset, length, position) {
   var contents = stream.node.contents;
   if (position >= stream.node.usedBytes) return 0;
   var size = Math.min(stream.node.usedBytes - position, length);
   assert(size >= 0);
   if (size > 8 && contents.subarray) {
    buffer.set(contents.subarray(position, position + size), offset);
   } else {
    for (var i = 0; i < size; i++) buffer[offset + i] = contents[position + i];
   }
   return size;
  },
  write: function(stream, buffer, offset, length, position, canOwn) {
   assert(!(buffer instanceof ArrayBuffer));
   if (buffer.buffer === GROWABLE_HEAP_I8().buffer) {
    canOwn = false;
   }
   if (!length) return 0;
   var node = stream.node;
   node.timestamp = Date.now();
   if (buffer.subarray && (!node.contents || node.contents.subarray)) {
    if (canOwn) {
     assert(position === 0, "canOwn must imply no weird position inside the file");
     node.contents = buffer.subarray(offset, offset + length);
     node.usedBytes = length;
     return length;
    } else if (node.usedBytes === 0 && position === 0) {
     node.contents = buffer.slice(offset, offset + length);
     node.usedBytes = length;
     return length;
    } else if (position + length <= node.usedBytes) {
     node.contents.set(buffer.subarray(offset, offset + length), position);
     return length;
    }
   }
   MEMFS.expandFileStorage(node, position + length);
   if (node.contents.subarray && buffer.subarray) {
    node.contents.set(buffer.subarray(offset, offset + length), position);
   } else {
    for (var i = 0; i < length; i++) {
     node.contents[position + i] = buffer[offset + i];
    }
   }
   node.usedBytes = Math.max(node.usedBytes, position + length);
   return length;
  },
  llseek: function(stream, offset, whence) {
   var position = offset;
   if (whence === 1) {
    position += stream.position;
   } else if (whence === 2) {
    if (FS.isFile(stream.node.mode)) {
     position += stream.node.usedBytes;
    }
   }
   if (position < 0) {
    throw new FS.ErrnoError(28);
   }
   return position;
  },
  allocate: function(stream, offset, length) {
   MEMFS.expandFileStorage(stream.node, offset + length);
   stream.node.usedBytes = Math.max(stream.node.usedBytes, offset + length);
  },
  mmap: function(stream, length, position, prot, flags) {
   if (!FS.isFile(stream.node.mode)) {
    throw new FS.ErrnoError(43);
   }
   var ptr;
   var allocated;
   var contents = stream.node.contents;
   if (!(flags & 2) && contents.buffer === buffer) {
    allocated = false;
    ptr = contents.byteOffset;
   } else {
    if (position > 0 || position + length < contents.length) {
     if (contents.subarray) {
      contents = contents.subarray(position, position + length);
     } else {
      contents = Array.prototype.slice.call(contents, position, position + length);
     }
    }
    allocated = true;
    ptr = mmapAlloc(length);
    if (!ptr) {
     throw new FS.ErrnoError(48);
    }
    ptr >>>= 0;
    GROWABLE_HEAP_I8().set(contents, ptr >>> 0);
   }
   return {
    ptr: ptr,
    allocated: allocated
   };
  },
  msync: function(stream, buffer, offset, length, mmapFlags) {
   if (!FS.isFile(stream.node.mode)) {
    throw new FS.ErrnoError(43);
   }
   if (mmapFlags & 2) {
    return 0;
   }
   var bytesWritten = MEMFS.stream_ops.write(stream, buffer, 0, length, offset, false);
   return 0;
  }
 }
};

Module["MEMFS"] = MEMFS;

function asyncLoad(url, onload, onerror, noRunDep) {
 var dep = !noRunDep ? getUniqueRunDependency("al " + url) : "";
 readAsync(url, function(arrayBuffer) {
  assert(arrayBuffer, 'Loading data file "' + url + '" failed (no arrayBuffer).');
  onload(new Uint8Array(arrayBuffer));
  if (dep) removeRunDependency(dep);
 }, function(event) {
  if (onerror) {
   onerror();
  } else {
   throw 'Loading data file "' + url + '" failed.';
  }
 });
 if (dep) addRunDependency(dep);
}

Module["asyncLoad"] = asyncLoad;

var ERRNO_MESSAGES = {
 0: "Success",
 1: "Arg list too long",
 2: "Permission denied",
 3: "Address already in use",
 4: "Address not available",
 5: "Address family not supported by protocol family",
 6: "No more processes",
 7: "Socket already connected",
 8: "Bad file number",
 9: "Trying to read unreadable message",
 10: "Mount device busy",
 11: "Operation canceled",
 12: "No children",
 13: "Connection aborted",
 14: "Connection refused",
 15: "Connection reset by peer",
 16: "File locking deadlock error",
 17: "Destination address required",
 18: "Math arg out of domain of func",
 19: "Quota exceeded",
 20: "File exists",
 21: "Bad address",
 22: "File too large",
 23: "Host is unreachable",
 24: "Identifier removed",
 25: "Illegal byte sequence",
 26: "Connection already in progress",
 27: "Interrupted system call",
 28: "Invalid argument",
 29: "I/O error",
 30: "Socket is already connected",
 31: "Is a directory",
 32: "Too many symbolic links",
 33: "Too many open files",
 34: "Too many links",
 35: "Message too long",
 36: "Multihop attempted",
 37: "File or path name too long",
 38: "Network interface is not configured",
 39: "Connection reset by network",
 40: "Network is unreachable",
 41: "Too many open files in system",
 42: "No buffer space available",
 43: "No such device",
 44: "No such file or directory",
 45: "Exec format error",
 46: "No record locks available",
 47: "The link has been severed",
 48: "Not enough core",
 49: "No message of desired type",
 50: "Protocol not available",
 51: "No space left on device",
 52: "Function not implemented",
 53: "Socket is not connected",
 54: "Not a directory",
 55: "Directory not empty",
 56: "State not recoverable",
 57: "Socket operation on non-socket",
 59: "Not a typewriter",
 60: "No such device or address",
 61: "Value too large for defined data type",
 62: "Previous owner died",
 63: "Not super-user",
 64: "Broken pipe",
 65: "Protocol error",
 66: "Unknown protocol",
 67: "Protocol wrong type for socket",
 68: "Math result not representable",
 69: "Read only file system",
 70: "Illegal seek",
 71: "No such process",
 72: "Stale file handle",
 73: "Connection timed out",
 74: "Text file busy",
 75: "Cross-device link",
 100: "Device not a stream",
 101: "Bad font file fmt",
 102: "Invalid slot",
 103: "Invalid request code",
 104: "No anode",
 105: "Block device required",
 106: "Channel number out of range",
 107: "Level 3 halted",
 108: "Level 3 reset",
 109: "Link number out of range",
 110: "Protocol driver not attached",
 111: "No CSI structure available",
 112: "Level 2 halted",
 113: "Invalid exchange",
 114: "Invalid request descriptor",
 115: "Exchange full",
 116: "No data (for no delay io)",
 117: "Timer expired",
 118: "Out of streams resources",
 119: "Machine is not on the network",
 120: "Package not installed",
 121: "The object is remote",
 122: "Advertise error",
 123: "Srmount error",
 124: "Communication error on send",
 125: "Cross mount point (not really error)",
 126: "Given log. name not unique",
 127: "f.d. invalid for this operation",
 128: "Remote address changed",
 129: "Can   access a needed shared lib",
 130: "Accessing a corrupted shared lib",
 131: ".lib section in a.out corrupted",
 132: "Attempting to link in too many libs",
 133: "Attempting to exec a shared library",
 135: "Streams pipe error",
 136: "Too many users",
 137: "Socket type not supported",
 138: "Not supported",
 139: "Protocol family not supported",
 140: "Can't send after socket shutdown",
 141: "Too many references",
 142: "Host is down",
 148: "No medium (in tape drive)",
 156: "Level 2 not synchronized"
};

Module["ERRNO_MESSAGES"] = ERRNO_MESSAGES;

var ERRNO_CODES = {};

Module["ERRNO_CODES"] = ERRNO_CODES;

var FS = {
 root: null,
 mounts: [],
 devices: {},
 streams: [],
 nextInode: 1,
 nameTable: null,
 currentPath: "/",
 initialized: false,
 ignorePermissions: true,
 ErrnoError: null,
 genericErrors: {},
 filesystems: null,
 syncFSRequests: 0,
 lookupPath: (path, opts = {}) => {
  path = PATH_FS.resolve(FS.cwd(), path);
  if (!path) return {
   path: "",
   node: null
  };
  var defaults = {
   follow_mount: true,
   recurse_count: 0
  };
  opts = Object.assign(defaults, opts);
  if (opts.recurse_count > 8) {
   throw new FS.ErrnoError(32);
  }
  var parts = PATH.normalizeArray(path.split("/").filter(p => !!p), false);
  var current = FS.root;
  var current_path = "/";
  for (var i = 0; i < parts.length; i++) {
   var islast = i === parts.length - 1;
   if (islast && opts.parent) {
    break;
   }
   current = FS.lookupNode(current, parts[i]);
   current_path = PATH.join2(current_path, parts[i]);
   if (FS.isMountpoint(current)) {
    if (!islast || islast && opts.follow_mount) {
     current = current.mounted.root;
    }
   }
   if (!islast || opts.follow) {
    var count = 0;
    while (FS.isLink(current.mode)) {
     var link = FS.readlink(current_path);
     current_path = PATH_FS.resolve(PATH.dirname(current_path), link);
     var lookup = FS.lookupPath(current_path, {
      recurse_count: opts.recurse_count + 1
     });
     current = lookup.node;
     if (count++ > 40) {
      throw new FS.ErrnoError(32);
     }
    }
   }
  }
  return {
   path: current_path,
   node: current
  };
 },
 getPath: node => {
  var path;
  while (true) {
   if (FS.isRoot(node)) {
    var mount = node.mount.mountpoint;
    if (!path) return mount;
    return mount[mount.length - 1] !== "/" ? mount + "/" + path : mount + path;
   }
   path = path ? node.name + "/" + path : node.name;
   node = node.parent;
  }
 },
 hashName: (parentid, name) => {
  var hash = 0;
  for (var i = 0; i < name.length; i++) {
   hash = (hash << 5) - hash + name.charCodeAt(i) | 0;
  }
  return (parentid + hash >>> 0) % FS.nameTable.length;
 },
 hashAddNode: node => {
  var hash = FS.hashName(node.parent.id, node.name);
  node.name_next = FS.nameTable[hash];
  FS.nameTable[hash] = node;
 },
 hashRemoveNode: node => {
  var hash = FS.hashName(node.parent.id, node.name);
  if (FS.nameTable[hash] === node) {
   FS.nameTable[hash] = node.name_next;
  } else {
   var current = FS.nameTable[hash];
   while (current) {
    if (current.name_next === node) {
     current.name_next = node.name_next;
     break;
    }
    current = current.name_next;
   }
  }
 },
 lookupNode: (parent, name) => {
  var errCode = FS.mayLookup(parent);
  if (errCode) {
   throw new FS.ErrnoError(errCode, parent);
  }
  var hash = FS.hashName(parent.id, name);
  for (var node = FS.nameTable[hash]; node; node = node.name_next) {
   var nodeName = node.name;
   if (node.parent.id === parent.id && nodeName === name) {
    return node;
   }
  }
  return FS.lookup(parent, name);
 },
 createNode: (parent, name, mode, rdev) => {
  assert(typeof parent == "object");
  var node = new FS.FSNode(parent, name, mode, rdev);
  FS.hashAddNode(node);
  return node;
 },
 destroyNode: node => {
  FS.hashRemoveNode(node);
 },
 isRoot: node => {
  return node === node.parent;
 },
 isMountpoint: node => {
  return !!node.mounted;
 },
 isFile: mode => {
  return (mode & 61440) === 32768;
 },
 isDir: mode => {
  return (mode & 61440) === 16384;
 },
 isLink: mode => {
  return (mode & 61440) === 40960;
 },
 isChrdev: mode => {
  return (mode & 61440) === 8192;
 },
 isBlkdev: mode => {
  return (mode & 61440) === 24576;
 },
 isFIFO: mode => {
  return (mode & 61440) === 4096;
 },
 isSocket: mode => {
  return (mode & 49152) === 49152;
 },
 flagModes: {
  "r": 0,
  "r+": 2,
  "w": 577,
  "w+": 578,
  "a": 1089,
  "a+": 1090
 },
 modeStringToFlags: str => {
  var flags = FS.flagModes[str];
  if (typeof flags == "undefined") {
   throw new Error("Unknown file open mode: " + str);
  }
  return flags;
 },
 flagsToPermissionString: flag => {
  var perms = [ "r", "w", "rw" ][flag & 3];
  if (flag & 512) {
   perms += "w";
  }
  return perms;
 },
 nodePermissions: (node, perms) => {
  if (FS.ignorePermissions) {
   return 0;
  }
  if (perms.includes("r") && !(node.mode & 292)) {
   return 2;
  } else if (perms.includes("w") && !(node.mode & 146)) {
   return 2;
  } else if (perms.includes("x") && !(node.mode & 73)) {
   return 2;
  }
  return 0;
 },
 mayLookup: dir => {
  var errCode = FS.nodePermissions(dir, "x");
  if (errCode) return errCode;
  if (!dir.node_ops.lookup) return 2;
  return 0;
 },
 mayCreate: (dir, name) => {
  try {
   var node = FS.lookupNode(dir, name);
   return 20;
  } catch (e) {}
  return FS.nodePermissions(dir, "wx");
 },
 mayDelete: (dir, name, isdir) => {
  var node;
  try {
   node = FS.lookupNode(dir, name);
  } catch (e) {
   return e.errno;
  }
  var errCode = FS.nodePermissions(dir, "wx");
  if (errCode) {
   return errCode;
  }
  if (isdir) {
   if (!FS.isDir(node.mode)) {
    return 54;
   }
   if (FS.isRoot(node) || FS.getPath(node) === FS.cwd()) {
    return 10;
   }
  } else {
   if (FS.isDir(node.mode)) {
    return 31;
   }
  }
  return 0;
 },
 mayOpen: (node, flags) => {
  if (!node) {
   return 44;
  }
  if (FS.isLink(node.mode)) {
   return 32;
  } else if (FS.isDir(node.mode)) {
   if (FS.flagsToPermissionString(flags) !== "r" || flags & 512) {
    return 31;
   }
  }
  return FS.nodePermissions(node, FS.flagsToPermissionString(flags));
 },
 MAX_OPEN_FDS: 4096,
 nextfd: (fd_start = 0, fd_end = FS.MAX_OPEN_FDS) => {
  for (var fd = fd_start; fd <= fd_end; fd++) {
   if (!FS.streams[fd]) {
    return fd;
   }
  }
  throw new FS.ErrnoError(33);
 },
 getStream: fd => FS.streams[fd],
 createStream: (stream, fd_start, fd_end) => {
  if (!FS.FSStream) {
   FS.FSStream = function() {
    this.shared = {};
   };
   FS.FSStream.prototype = {};
   Object.defineProperties(FS.FSStream.prototype, {
    object: {
     get: function() {
      return this.node;
     },
     set: function(val) {
      this.node = val;
     }
    },
    isRead: {
     get: function() {
      return (this.flags & 2097155) !== 1;
     }
    },
    isWrite: {
     get: function() {
      return (this.flags & 2097155) !== 0;
     }
    },
    isAppend: {
     get: function() {
      return this.flags & 1024;
     }
    },
    flags: {
     get: function() {
      return this.shared.flags;
     },
     set: function(val) {
      this.shared.flags = val;
     }
    },
    position: {
     get: function() {
      return this.shared.position;
     },
     set: function(val) {
      this.shared.position = val;
     }
    }
   });
  }
  stream = Object.assign(new FS.FSStream(), stream);
  var fd = FS.nextfd(fd_start, fd_end);
  stream.fd = fd;
  FS.streams[fd] = stream;
  return stream;
 },
 closeStream: fd => {
  FS.streams[fd] = null;
 },
 chrdev_stream_ops: {
  open: stream => {
   var device = FS.getDevice(stream.node.rdev);
   stream.stream_ops = device.stream_ops;
   if (stream.stream_ops.open) {
    stream.stream_ops.open(stream);
   }
  },
  llseek: () => {
   throw new FS.ErrnoError(70);
  }
 },
 major: dev => dev >> 8,
 minor: dev => dev & 255,
 makedev: (ma, mi) => ma << 8 | mi,
 registerDevice: (dev, ops) => {
  FS.devices[dev] = {
   stream_ops: ops
  };
 },
 getDevice: dev => FS.devices[dev],
 getMounts: mount => {
  var mounts = [];
  var check = [ mount ];
  while (check.length) {
   var m = check.pop();
   mounts.push(m);
   check.push.apply(check, m.mounts);
  }
  return mounts;
 },
 syncfs: (populate, callback) => {
  if (typeof populate == "function") {
   callback = populate;
   populate = false;
  }
  FS.syncFSRequests++;
  if (FS.syncFSRequests > 1) {
   err("warning: " + FS.syncFSRequests + " FS.syncfs operations in flight at once, probably just doing extra work");
  }
  var mounts = FS.getMounts(FS.root.mount);
  var completed = 0;
  function doCallback(errCode) {
   assert(FS.syncFSRequests > 0);
   FS.syncFSRequests--;
   return callback(errCode);
  }
  function done(errCode) {
   if (errCode) {
    if (!done.errored) {
     done.errored = true;
     return doCallback(errCode);
    }
    return;
   }
   if (++completed >= mounts.length) {
    doCallback(null);
   }
  }
  mounts.forEach(mount => {
   if (!mount.type.syncfs) {
    return done(null);
   }
   mount.type.syncfs(mount, populate, done);
  });
 },
 mount: (type, opts, mountpoint) => {
  if (typeof type == "string") {
   throw type;
  }
  var root = mountpoint === "/";
  var pseudo = !mountpoint;
  var node;
  if (root && FS.root) {
   throw new FS.ErrnoError(10);
  } else if (!root && !pseudo) {
   var lookup = FS.lookupPath(mountpoint, {
    follow_mount: false
   });
   mountpoint = lookup.path;
   node = lookup.node;
   if (FS.isMountpoint(node)) {
    throw new FS.ErrnoError(10);
   }
   if (!FS.isDir(node.mode)) {
    throw new FS.ErrnoError(54);
   }
  }
  var mount = {
   type: type,
   opts: opts,
   mountpoint: mountpoint,
   mounts: []
  };
  var mountRoot = type.mount(mount);
  mountRoot.mount = mount;
  mount.root = mountRoot;
  if (root) {
   FS.root = mountRoot;
  } else if (node) {
   node.mounted = mount;
   if (node.mount) {
    node.mount.mounts.push(mount);
   }
  }
  return mountRoot;
 },
 unmount: mountpoint => {
  var lookup = FS.lookupPath(mountpoint, {
   follow_mount: false
  });
  if (!FS.isMountpoint(lookup.node)) {
   throw new FS.ErrnoError(28);
  }
  var node = lookup.node;
  var mount = node.mounted;
  var mounts = FS.getMounts(mount);
  Object.keys(FS.nameTable).forEach(hash => {
   var current = FS.nameTable[hash];
   while (current) {
    var next = current.name_next;
    if (mounts.includes(current.mount)) {
     FS.destroyNode(current);
    }
    current = next;
   }
  });
  node.mounted = null;
  var idx = node.mount.mounts.indexOf(mount);
  assert(idx !== -1);
  node.mount.mounts.splice(idx, 1);
 },
 lookup: (parent, name) => {
  return parent.node_ops.lookup(parent, name);
 },
 mknod: (path, mode, dev) => {
  var lookup = FS.lookupPath(path, {
   parent: true
  });
  var parent = lookup.node;
  var name = PATH.basename(path);
  if (!name || name === "." || name === "..") {
   throw new FS.ErrnoError(28);
  }
  var errCode = FS.mayCreate(parent, name);
  if (errCode) {
   throw new FS.ErrnoError(errCode);
  }
  if (!parent.node_ops.mknod) {
   throw new FS.ErrnoError(63);
  }
  return parent.node_ops.mknod(parent, name, mode, dev);
 },
 create: (path, mode) => {
  mode = mode !== undefined ? mode : 438;
  mode &= 4095;
  mode |= 32768;
  return FS.mknod(path, mode, 0);
 },
 mkdir: (path, mode) => {
  mode = mode !== undefined ? mode : 511;
  mode &= 511 | 512;
  mode |= 16384;
  return FS.mknod(path, mode, 0);
 },
 mkdirTree: (path, mode) => {
  var dirs = path.split("/");
  var d = "";
  for (var i = 0; i < dirs.length; ++i) {
   if (!dirs[i]) continue;
   d += "/" + dirs[i];
   try {
    FS.mkdir(d, mode);
   } catch (e) {
    if (e.errno != 20) throw e;
   }
  }
 },
 mkdev: (path, mode, dev) => {
  if (typeof dev == "undefined") {
   dev = mode;
   mode = 438;
  }
  mode |= 8192;
  return FS.mknod(path, mode, dev);
 },
 symlink: (oldpath, newpath) => {
  if (!PATH_FS.resolve(oldpath)) {
   throw new FS.ErrnoError(44);
  }
  var lookup = FS.lookupPath(newpath, {
   parent: true
  });
  var parent = lookup.node;
  if (!parent) {
   throw new FS.ErrnoError(44);
  }
  var newname = PATH.basename(newpath);
  var errCode = FS.mayCreate(parent, newname);
  if (errCode) {
   throw new FS.ErrnoError(errCode);
  }
  if (!parent.node_ops.symlink) {
   throw new FS.ErrnoError(63);
  }
  return parent.node_ops.symlink(parent, newname, oldpath);
 },
 rename: (old_path, new_path) => {
  var old_dirname = PATH.dirname(old_path);
  var new_dirname = PATH.dirname(new_path);
  var old_name = PATH.basename(old_path);
  var new_name = PATH.basename(new_path);
  var lookup, old_dir, new_dir;
  lookup = FS.lookupPath(old_path, {
   parent: true
  });
  old_dir = lookup.node;
  lookup = FS.lookupPath(new_path, {
   parent: true
  });
  new_dir = lookup.node;
  if (!old_dir || !new_dir) throw new FS.ErrnoError(44);
  if (old_dir.mount !== new_dir.mount) {
   throw new FS.ErrnoError(75);
  }
  var old_node = FS.lookupNode(old_dir, old_name);
  var relative = PATH_FS.relative(old_path, new_dirname);
  if (relative.charAt(0) !== ".") {
   throw new FS.ErrnoError(28);
  }
  relative = PATH_FS.relative(new_path, old_dirname);
  if (relative.charAt(0) !== ".") {
   throw new FS.ErrnoError(55);
  }
  var new_node;
  try {
   new_node = FS.lookupNode(new_dir, new_name);
  } catch (e) {}
  if (old_node === new_node) {
   return;
  }
  var isdir = FS.isDir(old_node.mode);
  var errCode = FS.mayDelete(old_dir, old_name, isdir);
  if (errCode) {
   throw new FS.ErrnoError(errCode);
  }
  errCode = new_node ? FS.mayDelete(new_dir, new_name, isdir) : FS.mayCreate(new_dir, new_name);
  if (errCode) {
   throw new FS.ErrnoError(errCode);
  }
  if (!old_dir.node_ops.rename) {
   throw new FS.ErrnoError(63);
  }
  if (FS.isMountpoint(old_node) || new_node && FS.isMountpoint(new_node)) {
   throw new FS.ErrnoError(10);
  }
  if (new_dir !== old_dir) {
   errCode = FS.nodePermissions(old_dir, "w");
   if (errCode) {
    throw new FS.ErrnoError(errCode);
   }
  }
  FS.hashRemoveNode(old_node);
  try {
   old_dir.node_ops.rename(old_node, new_dir, new_name);
  } catch (e) {
   throw e;
  } finally {
   FS.hashAddNode(old_node);
  }
 },
 rmdir: path => {
  var lookup = FS.lookupPath(path, {
   parent: true
  });
  var parent = lookup.node;
  var name = PATH.basename(path);
  var node = FS.lookupNode(parent, name);
  var errCode = FS.mayDelete(parent, name, true);
  if (errCode) {
   throw new FS.ErrnoError(errCode);
  }
  if (!parent.node_ops.rmdir) {
   throw new FS.ErrnoError(63);
  }
  if (FS.isMountpoint(node)) {
   throw new FS.ErrnoError(10);
  }
  parent.node_ops.rmdir(parent, name);
  FS.destroyNode(node);
 },
 readdir: path => {
  var lookup = FS.lookupPath(path, {
   follow: true
  });
  var node = lookup.node;
  if (!node.node_ops.readdir) {
   throw new FS.ErrnoError(54);
  }
  return node.node_ops.readdir(node);
 },
 unlink: path => {
  var lookup = FS.lookupPath(path, {
   parent: true
  });
  var parent = lookup.node;
  if (!parent) {
   throw new FS.ErrnoError(44);
  }
  var name = PATH.basename(path);
  var node = FS.lookupNode(parent, name);
  var errCode = FS.mayDelete(parent, name, false);
  if (errCode) {
   throw new FS.ErrnoError(errCode);
  }
  if (!parent.node_ops.unlink) {
   throw new FS.ErrnoError(63);
  }
  if (FS.isMountpoint(node)) {
   throw new FS.ErrnoError(10);
  }
  parent.node_ops.unlink(parent, name);
  FS.destroyNode(node);
 },
 readlink: path => {
  var lookup = FS.lookupPath(path);
  var link = lookup.node;
  if (!link) {
   throw new FS.ErrnoError(44);
  }
  if (!link.node_ops.readlink) {
   throw new FS.ErrnoError(28);
  }
  return PATH_FS.resolve(FS.getPath(link.parent), link.node_ops.readlink(link));
 },
 stat: (path, dontFollow) => {
  var lookup = FS.lookupPath(path, {
   follow: !dontFollow
  });
  var node = lookup.node;
  if (!node) {
   throw new FS.ErrnoError(44);
  }
  if (!node.node_ops.getattr) {
   throw new FS.ErrnoError(63);
  }
  return node.node_ops.getattr(node);
 },
 lstat: path => {
  return FS.stat(path, true);
 },
 chmod: (path, mode, dontFollow) => {
  var node;
  if (typeof path == "string") {
   var lookup = FS.lookupPath(path, {
    follow: !dontFollow
   });
   node = lookup.node;
  } else {
   node = path;
  }
  if (!node.node_ops.setattr) {
   throw new FS.ErrnoError(63);
  }
  node.node_ops.setattr(node, {
   mode: mode & 4095 | node.mode & ~4095,
   timestamp: Date.now()
  });
 },
 lchmod: (path, mode) => {
  FS.chmod(path, mode, true);
 },
 fchmod: (fd, mode) => {
  var stream = FS.getStream(fd);
  if (!stream) {
   throw new FS.ErrnoError(8);
  }
  FS.chmod(stream.node, mode);
 },
 chown: (path, uid, gid, dontFollow) => {
  var node;
  if (typeof path == "string") {
   var lookup = FS.lookupPath(path, {
    follow: !dontFollow
   });
   node = lookup.node;
  } else {
   node = path;
  }
  if (!node.node_ops.setattr) {
   throw new FS.ErrnoError(63);
  }
  node.node_ops.setattr(node, {
   timestamp: Date.now()
  });
 },
 lchown: (path, uid, gid) => {
  FS.chown(path, uid, gid, true);
 },
 fchown: (fd, uid, gid) => {
  var stream = FS.getStream(fd);
  if (!stream) {
   throw new FS.ErrnoError(8);
  }
  FS.chown(stream.node, uid, gid);
 },
 truncate: (path, len) => {
  if (len < 0) {
   throw new FS.ErrnoError(28);
  }
  var node;
  if (typeof path == "string") {
   var lookup = FS.lookupPath(path, {
    follow: true
   });
   node = lookup.node;
  } else {
   node = path;
  }
  if (!node.node_ops.setattr) {
   throw new FS.ErrnoError(63);
  }
  if (FS.isDir(node.mode)) {
   throw new FS.ErrnoError(31);
  }
  if (!FS.isFile(node.mode)) {
   throw new FS.ErrnoError(28);
  }
  var errCode = FS.nodePermissions(node, "w");
  if (errCode) {
   throw new FS.ErrnoError(errCode);
  }
  node.node_ops.setattr(node, {
   size: len,
   timestamp: Date.now()
  });
 },
 ftruncate: (fd, len) => {
  var stream = FS.getStream(fd);
  if (!stream) {
   throw new FS.ErrnoError(8);
  }
  if ((stream.flags & 2097155) === 0) {
   throw new FS.ErrnoError(28);
  }
  FS.truncate(stream.node, len);
 },
 utime: (path, atime, mtime) => {
  var lookup = FS.lookupPath(path, {
   follow: true
  });
  var node = lookup.node;
  node.node_ops.setattr(node, {
   timestamp: Math.max(atime, mtime)
  });
 },
 open: (path, flags, mode) => {
  if (path === "") {
   throw new FS.ErrnoError(44);
  }
  flags = typeof flags == "string" ? FS.modeStringToFlags(flags) : flags;
  mode = typeof mode == "undefined" ? 438 : mode;
  if (flags & 64) {
   mode = mode & 4095 | 32768;
  } else {
   mode = 0;
  }
  var node;
  if (typeof path == "object") {
   node = path;
  } else {
   path = PATH.normalize(path);
   try {
    var lookup = FS.lookupPath(path, {
     follow: !(flags & 131072)
    });
    node = lookup.node;
   } catch (e) {}
  }
  var created = false;
  if (flags & 64) {
   if (node) {
    if (flags & 128) {
     throw new FS.ErrnoError(20);
    }
   } else {
    node = FS.mknod(path, mode, 0);
    created = true;
   }
  }
  if (!node) {
   throw new FS.ErrnoError(44);
  }
  if (FS.isChrdev(node.mode)) {
   flags &= ~512;
  }
  if (flags & 65536 && !FS.isDir(node.mode)) {
   throw new FS.ErrnoError(54);
  }
  if (!created) {
   var errCode = FS.mayOpen(node, flags);
   if (errCode) {
    throw new FS.ErrnoError(errCode);
   }
  }
  if (flags & 512 && !created) {
   FS.truncate(node, 0);
  }
  flags &= ~(128 | 512 | 131072);
  var stream = FS.createStream({
   node: node,
   path: FS.getPath(node),
   flags: flags,
   seekable: true,
   position: 0,
   stream_ops: node.stream_ops,
   ungotten: [],
   error: false
  });
  if (stream.stream_ops.open) {
   stream.stream_ops.open(stream);
  }
  if (Module["logReadFiles"] && !(flags & 1)) {
   if (!FS.readFiles) FS.readFiles = {};
   if (!(path in FS.readFiles)) {
    FS.readFiles[path] = 1;
   }
  }
  return stream;
 },
 close: stream => {
  if (FS.isClosed(stream)) {
   throw new FS.ErrnoError(8);
  }
  if (stream.getdents) stream.getdents = null;
  try {
   if (stream.stream_ops.close) {
    stream.stream_ops.close(stream);
   }
  } catch (e) {
   throw e;
  } finally {
   FS.closeStream(stream.fd);
  }
  stream.fd = null;
 },
 isClosed: stream => {
  return stream.fd === null;
 },
 llseek: (stream, offset, whence) => {
  if (FS.isClosed(stream)) {
   throw new FS.ErrnoError(8);
  }
  if (!stream.seekable || !stream.stream_ops.llseek) {
   throw new FS.ErrnoError(70);
  }
  if (whence != 0 && whence != 1 && whence != 2) {
   throw new FS.ErrnoError(28);
  }
  stream.position = stream.stream_ops.llseek(stream, offset, whence);
  stream.ungotten = [];
  return stream.position;
 },
 read: (stream, buffer, offset, length, position) => {
  offset >>>= 0;
  if (length < 0 || position < 0) {
   throw new FS.ErrnoError(28);
  }
  if (FS.isClosed(stream)) {
   throw new FS.ErrnoError(8);
  }
  if ((stream.flags & 2097155) === 1) {
   throw new FS.ErrnoError(8);
  }
  if (FS.isDir(stream.node.mode)) {
   throw new FS.ErrnoError(31);
  }
  if (!stream.stream_ops.read) {
   throw new FS.ErrnoError(28);
  }
  var seeking = typeof position != "undefined";
  if (!seeking) {
   position = stream.position;
  } else if (!stream.seekable) {
   throw new FS.ErrnoError(70);
  }
  var bytesRead = stream.stream_ops.read(stream, buffer, offset, length, position);
  if (!seeking) stream.position += bytesRead;
  return bytesRead;
 },
 write: (stream, buffer, offset, length, position, canOwn) => {
  offset >>>= 0;
  if (length < 0 || position < 0) {
   throw new FS.ErrnoError(28);
  }
  if (FS.isClosed(stream)) {
   throw new FS.ErrnoError(8);
  }
  if ((stream.flags & 2097155) === 0) {
   throw new FS.ErrnoError(8);
  }
  if (FS.isDir(stream.node.mode)) {
   throw new FS.ErrnoError(31);
  }
  if (!stream.stream_ops.write) {
   throw new FS.ErrnoError(28);
  }
  if (stream.seekable && stream.flags & 1024) {
   FS.llseek(stream, 0, 2);
  }
  var seeking = typeof position != "undefined";
  if (!seeking) {
   position = stream.position;
  } else if (!stream.seekable) {
   throw new FS.ErrnoError(70);
  }
  var bytesWritten = stream.stream_ops.write(stream, buffer, offset, length, position, canOwn);
  if (!seeking) stream.position += bytesWritten;
  return bytesWritten;
 },
 allocate: (stream, offset, length) => {
  if (FS.isClosed(stream)) {
   throw new FS.ErrnoError(8);
  }
  if (offset < 0 || length <= 0) {
   throw new FS.ErrnoError(28);
  }
  if ((stream.flags & 2097155) === 0) {
   throw new FS.ErrnoError(8);
  }
  if (!FS.isFile(stream.node.mode) && !FS.isDir(stream.node.mode)) {
   throw new FS.ErrnoError(43);
  }
  if (!stream.stream_ops.allocate) {
   throw new FS.ErrnoError(138);
  }
  stream.stream_ops.allocate(stream, offset, length);
 },
 mmap: (stream, length, position, prot, flags) => {
  if ((prot & 2) !== 0 && (flags & 2) === 0 && (stream.flags & 2097155) !== 2) {
   throw new FS.ErrnoError(2);
  }
  if ((stream.flags & 2097155) === 1) {
   throw new FS.ErrnoError(2);
  }
  if (!stream.stream_ops.mmap) {
   throw new FS.ErrnoError(43);
  }
  return stream.stream_ops.mmap(stream, length, position, prot, flags);
 },
 msync: (stream, buffer, offset, length, mmapFlags) => {
  offset >>>= 0;
  if (!stream || !stream.stream_ops.msync) {
   return 0;
  }
  return stream.stream_ops.msync(stream, buffer, offset, length, mmapFlags);
 },
 munmap: stream => 0,
 ioctl: (stream, cmd, arg) => {
  if (!stream.stream_ops.ioctl) {
   throw new FS.ErrnoError(59);
  }
  return stream.stream_ops.ioctl(stream, cmd, arg);
 },
 readFile: (path, opts = {}) => {
  opts.flags = opts.flags || 0;
  opts.encoding = opts.encoding || "binary";
  if (opts.encoding !== "utf8" && opts.encoding !== "binary") {
   throw new Error('Invalid encoding type "' + opts.encoding + '"');
  }
  var ret;
  var stream = FS.open(path, opts.flags);
  var stat = FS.stat(path);
  var length = stat.size;
  var buf = new Uint8Array(length);
  FS.read(stream, buf, 0, length, 0);
  if (opts.encoding === "utf8") {
   ret = UTF8ArrayToString(buf, 0);
  } else if (opts.encoding === "binary") {
   ret = buf;
  }
  FS.close(stream);
  return ret;
 },
 writeFile: (path, data, opts = {}) => {
  opts.flags = opts.flags || 577;
  var stream = FS.open(path, opts.flags, opts.mode);
  if (typeof data == "string") {
   var buf = new Uint8Array(lengthBytesUTF8(data) + 1);
   var actualNumBytes = stringToUTF8Array(data, buf, 0, buf.length);
   FS.write(stream, buf, 0, actualNumBytes, undefined, opts.canOwn);
  } else if (ArrayBuffer.isView(data)) {
   FS.write(stream, data, 0, data.byteLength, undefined, opts.canOwn);
  } else {
   throw new Error("Unsupported data type");
  }
  FS.close(stream);
 },
 cwd: () => FS.currentPath,
 chdir: path => {
  var lookup = FS.lookupPath(path, {
   follow: true
  });
  if (lookup.node === null) {
   throw new FS.ErrnoError(44);
  }
  if (!FS.isDir(lookup.node.mode)) {
   throw new FS.ErrnoError(54);
  }
  var errCode = FS.nodePermissions(lookup.node, "x");
  if (errCode) {
   throw new FS.ErrnoError(errCode);
  }
  FS.currentPath = lookup.path;
 },
 createDefaultDirectories: () => {
  FS.mkdir("/tmp");
  FS.mkdir("/home");
  FS.mkdir("/home/web_user");
 },
 createDefaultDevices: () => {
  FS.mkdir("/dev");
  FS.registerDevice(FS.makedev(1, 3), {
   read: () => 0,
   write: (stream, buffer, offset, length, pos) => length
  });
  FS.mkdev("/dev/null", FS.makedev(1, 3));
  TTY.register(FS.makedev(5, 0), TTY.default_tty_ops);
  TTY.register(FS.makedev(6, 0), TTY.default_tty1_ops);
  FS.mkdev("/dev/tty", FS.makedev(5, 0));
  FS.mkdev("/dev/tty1", FS.makedev(6, 0));
  var random_device = getRandomDevice();
  FS.createDevice("/dev", "random", random_device);
  FS.createDevice("/dev", "urandom", random_device);
  FS.mkdir("/dev/shm");
  FS.mkdir("/dev/shm/tmp");
 },
 createSpecialDirectories: () => {
  FS.mkdir("/proc");
  var proc_self = FS.mkdir("/proc/self");
  FS.mkdir("/proc/self/fd");
  FS.mount({
   mount: () => {
    var node = FS.createNode(proc_self, "fd", 16384 | 511, 73);
    node.node_ops = {
     lookup: (parent, name) => {
      var fd = +name;
      var stream = FS.getStream(fd);
      if (!stream) throw new FS.ErrnoError(8);
      var ret = {
       parent: null,
       mount: {
        mountpoint: "fake"
       },
       node_ops: {
        readlink: () => stream.path
       }
      };
      ret.parent = ret;
      return ret;
     }
    };
    return node;
   }
  }, {}, "/proc/self/fd");
 },
 createStandardStreams: () => {
  if (Module["stdin"]) {
   FS.createDevice("/dev", "stdin", Module["stdin"]);
  } else {
   FS.symlink("/dev/tty", "/dev/stdin");
  }
  if (Module["stdout"]) {
   FS.createDevice("/dev", "stdout", null, Module["stdout"]);
  } else {
   FS.symlink("/dev/tty", "/dev/stdout");
  }
  if (Module["stderr"]) {
   FS.createDevice("/dev", "stderr", null, Module["stderr"]);
  } else {
   FS.symlink("/dev/tty1", "/dev/stderr");
  }
  var stdin = FS.open("/dev/stdin", 0);
  var stdout = FS.open("/dev/stdout", 1);
  var stderr = FS.open("/dev/stderr", 1);
  assert(stdin.fd === 0, "invalid handle for stdin (" + stdin.fd + ")");
  assert(stdout.fd === 1, "invalid handle for stdout (" + stdout.fd + ")");
  assert(stderr.fd === 2, "invalid handle for stderr (" + stderr.fd + ")");
 },
 ensureErrnoError: () => {
  if (FS.ErrnoError) return;
  FS.ErrnoError = function ErrnoError(errno, node) {
   this.node = node;
   this.setErrno = function(errno) {
    this.errno = errno;
    for (var key in ERRNO_CODES) {
     if (ERRNO_CODES[key] === errno) {
      this.code = key;
      break;
     }
    }
   };
   this.setErrno(errno);
   this.message = ERRNO_MESSAGES[errno];
   if (this.stack) {
    Object.defineProperty(this, "stack", {
     value: new Error().stack,
     writable: true
    });
    this.stack = demangleAll(this.stack);
   }
  };
  FS.ErrnoError.prototype = new Error();
  FS.ErrnoError.prototype.constructor = FS.ErrnoError;
  [ 44 ].forEach(code => {
   FS.genericErrors[code] = new FS.ErrnoError(code);
   FS.genericErrors[code].stack = "<generic error, no stack>";
  });
 },
 staticInit: () => {
  FS.ensureErrnoError();
  FS.nameTable = new Array(4096);
  FS.mount(MEMFS, {}, "/");
  FS.createDefaultDirectories();
  FS.createDefaultDevices();
  FS.createSpecialDirectories();
  FS.filesystems = {
   "MEMFS": MEMFS
  };
 },
 init: (input, output, error) => {
  assert(!FS.init.initialized, "FS.init was previously called. If you want to initialize later with custom parameters, remove any earlier calls (note that one is automatically added to the generated code)");
  FS.init.initialized = true;
  FS.ensureErrnoError();
  Module["stdin"] = input || Module["stdin"];
  Module["stdout"] = output || Module["stdout"];
  Module["stderr"] = error || Module["stderr"];
  FS.createStandardStreams();
 },
 quit: () => {
  FS.init.initialized = false;
  _fflush(0);
  for (var i = 0; i < FS.streams.length; i++) {
   var stream = FS.streams[i];
   if (!stream) {
    continue;
   }
   FS.close(stream);
  }
 },
 getMode: (canRead, canWrite) => {
  var mode = 0;
  if (canRead) mode |= 292 | 73;
  if (canWrite) mode |= 146;
  return mode;
 },
 findObject: (path, dontResolveLastLink) => {
  var ret = FS.analyzePath(path, dontResolveLastLink);
  if (ret.exists) {
   return ret.object;
  } else {
   return null;
  }
 },
 analyzePath: (path, dontResolveLastLink) => {
  try {
   var lookup = FS.lookupPath(path, {
    follow: !dontResolveLastLink
   });
   path = lookup.path;
  } catch (e) {}
  var ret = {
   isRoot: false,
   exists: false,
   error: 0,
   name: null,
   path: null,
   object: null,
   parentExists: false,
   parentPath: null,
   parentObject: null
  };
  try {
   var lookup = FS.lookupPath(path, {
    parent: true
   });
   ret.parentExists = true;
   ret.parentPath = lookup.path;
   ret.parentObject = lookup.node;
   ret.name = PATH.basename(path);
   lookup = FS.lookupPath(path, {
    follow: !dontResolveLastLink
   });
   ret.exists = true;
   ret.path = lookup.path;
   ret.object = lookup.node;
   ret.name = lookup.node.name;
   ret.isRoot = lookup.path === "/";
  } catch (e) {
   ret.error = e.errno;
  }
  return ret;
 },
 createPath: (parent, path, canRead, canWrite) => {
  parent = typeof parent == "string" ? parent : FS.getPath(parent);
  var parts = path.split("/").reverse();
  while (parts.length) {
   var part = parts.pop();
   if (!part) continue;
   var current = PATH.join2(parent, part);
   try {
    FS.mkdir(current);
   } catch (e) {}
   parent = current;
  }
  return current;
 },
 createFile: (parent, name, properties, canRead, canWrite) => {
  var path = PATH.join2(typeof parent == "string" ? parent : FS.getPath(parent), name);
  var mode = FS.getMode(canRead, canWrite);
  return FS.create(path, mode);
 },
 createDataFile: (parent, name, data, canRead, canWrite, canOwn) => {
  var path = name;
  if (parent) {
   parent = typeof parent == "string" ? parent : FS.getPath(parent);
   path = name ? PATH.join2(parent, name) : parent;
  }
  var mode = FS.getMode(canRead, canWrite);
  var node = FS.create(path, mode);
  if (data) {
   if (typeof data == "string") {
    var arr = new Array(data.length);
    for (var i = 0, len = data.length; i < len; ++i) arr[i] = data.charCodeAt(i);
    data = arr;
   }
   FS.chmod(node, mode | 146);
   var stream = FS.open(node, 577);
   FS.write(stream, data, 0, data.length, 0, canOwn);
   FS.close(stream);
   FS.chmod(node, mode);
  }
  return node;
 },
 createDevice: (parent, name, input, output) => {
  var path = PATH.join2(typeof parent == "string" ? parent : FS.getPath(parent), name);
  var mode = FS.getMode(!!input, !!output);
  if (!FS.createDevice.major) FS.createDevice.major = 64;
  var dev = FS.makedev(FS.createDevice.major++, 0);
  FS.registerDevice(dev, {
   open: stream => {
    stream.seekable = false;
   },
   close: stream => {
    if (output && output.buffer && output.buffer.length) {
     output(10);
    }
   },
   read: (stream, buffer, offset, length, pos) => {
    var bytesRead = 0;
    for (var i = 0; i < length; i++) {
     var result;
     try {
      result = input();
     } catch (e) {
      throw new FS.ErrnoError(29);
     }
     if (result === undefined && bytesRead === 0) {
      throw new FS.ErrnoError(6);
     }
     if (result === null || result === undefined) break;
     bytesRead++;
     buffer[offset + i] = result;
    }
    if (bytesRead) {
     stream.node.timestamp = Date.now();
    }
    return bytesRead;
   },
   write: (stream, buffer, offset, length, pos) => {
    for (var i = 0; i < length; i++) {
     try {
      output(buffer[offset + i]);
     } catch (e) {
      throw new FS.ErrnoError(29);
     }
    }
    if (length) {
     stream.node.timestamp = Date.now();
    }
    return i;
   }
  });
  return FS.mkdev(path, mode, dev);
 },
 forceLoadFile: obj => {
  if (obj.isDevice || obj.isFolder || obj.link || obj.contents) return true;
  if (typeof XMLHttpRequest != "undefined") {
   throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");
  } else if (read_) {
   try {
    obj.contents = intArrayFromString(read_(obj.url), true);
    obj.usedBytes = obj.contents.length;
   } catch (e) {
    throw new FS.ErrnoError(29);
   }
  } else {
   throw new Error("Cannot load without read() or XMLHttpRequest.");
  }
 },
 createLazyFile: (parent, name, url, canRead, canWrite) => {
  function LazyUint8Array() {
   this.lengthKnown = false;
   this.chunks = [];
  }
  LazyUint8Array.prototype.get = function LazyUint8Array_get(idx) {
   if (idx > this.length - 1 || idx < 0) {
    return undefined;
   }
   var chunkOffset = idx % this.chunkSize;
   var chunkNum = idx / this.chunkSize | 0;
   return this.getter(chunkNum)[chunkOffset];
  };
  LazyUint8Array.prototype.setDataGetter = function LazyUint8Array_setDataGetter(getter) {
   this.getter = getter;
  };
  LazyUint8Array.prototype.cacheLength = function LazyUint8Array_cacheLength() {
   var xhr = new XMLHttpRequest();
   xhr.open("HEAD", url, false);
   xhr.send(null);
   if (!(xhr.status >= 200 && xhr.status < 300 || xhr.status === 304)) throw new Error("Couldn't load " + url + ". Status: " + xhr.status);
   var datalength = Number(xhr.getResponseHeader("Content-length"));
   var header;
   var hasByteServing = (header = xhr.getResponseHeader("Accept-Ranges")) && header === "bytes";
   var usesGzip = (header = xhr.getResponseHeader("Content-Encoding")) && header === "gzip";
   var chunkSize = 1024 * 1024;
   if (!hasByteServing) chunkSize = datalength;
   var doXHR = (from, to) => {
    if (from > to) throw new Error("invalid range (" + from + ", " + to + ") or no bytes requested!");
    if (to > datalength - 1) throw new Error("only " + datalength + " bytes available! programmer error!");
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, false);
    if (datalength !== chunkSize) xhr.setRequestHeader("Range", "bytes=" + from + "-" + to);
    xhr.responseType = "arraybuffer";
    if (xhr.overrideMimeType) {
     xhr.overrideMimeType("text/plain; charset=x-user-defined");
    }
    xhr.send(null);
    if (!(xhr.status >= 200 && xhr.status < 300 || xhr.status === 304)) throw new Error("Couldn't load " + url + ". Status: " + xhr.status);
    if (xhr.response !== undefined) {
     return new Uint8Array(xhr.response || []);
    } else {
     return intArrayFromString(xhr.responseText || "", true);
    }
   };
   var lazyArray = this;
   lazyArray.setDataGetter(chunkNum => {
    var start = chunkNum * chunkSize;
    var end = (chunkNum + 1) * chunkSize - 1;
    end = Math.min(end, datalength - 1);
    if (typeof lazyArray.chunks[chunkNum] == "undefined") {
     lazyArray.chunks[chunkNum] = doXHR(start, end);
    }
    if (typeof lazyArray.chunks[chunkNum] == "undefined") throw new Error("doXHR failed!");
    return lazyArray.chunks[chunkNum];
   });
   if (usesGzip || !datalength) {
    chunkSize = datalength = 1;
    datalength = this.getter(0).length;
    chunkSize = datalength;
    out("LazyFiles on gzip forces download of the whole file when length is accessed");
   }
   this._length = datalength;
   this._chunkSize = chunkSize;
   this.lengthKnown = true;
  };
  if (typeof XMLHttpRequest != "undefined") {
   if (!ENVIRONMENT_IS_WORKER) throw "Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";
   var lazyArray = new LazyUint8Array();
   Object.defineProperties(lazyArray, {
    length: {
     get: function() {
      if (!this.lengthKnown) {
       this.cacheLength();
      }
      return this._length;
     }
    },
    chunkSize: {
     get: function() {
      if (!this.lengthKnown) {
       this.cacheLength();
      }
      return this._chunkSize;
     }
    }
   });
   var properties = {
    isDevice: false,
    contents: lazyArray
   };
  } else {
   var properties = {
    isDevice: false,
    url: url
   };
  }
  var node = FS.createFile(parent, name, properties, canRead, canWrite);
  if (properties.contents) {
   node.contents = properties.contents;
  } else if (properties.url) {
   node.contents = null;
   node.url = properties.url;
  }
  Object.defineProperties(node, {
   usedBytes: {
    get: function() {
     return this.contents.length;
    }
   }
  });
  var stream_ops = {};
  var keys = Object.keys(node.stream_ops);
  keys.forEach(key => {
   var fn = node.stream_ops[key];
   stream_ops[key] = function forceLoadLazyFile() {
    FS.forceLoadFile(node);
    return fn.apply(null, arguments);
   };
  });
  function writeChunks(stream, buffer, offset, length, position) {
   var contents = stream.node.contents;
   if (position >= contents.length) return 0;
   var size = Math.min(contents.length - position, length);
   assert(size >= 0);
   if (contents.slice) {
    for (var i = 0; i < size; i++) {
     buffer[offset + i] = contents[position + i];
    }
   } else {
    for (var i = 0; i < size; i++) {
     buffer[offset + i] = contents.get(position + i);
    }
   }
   return size;
  }
  stream_ops.read = (stream, buffer, offset, length, position) => {
   FS.forceLoadFile(node);
   return writeChunks(stream, buffer, offset, length, position);
  };
  stream_ops.mmap = (stream, length, position, prot, flags) => {
   FS.forceLoadFile(node);
   var ptr = mmapAlloc(length);
   if (!ptr) {
    throw new FS.ErrnoError(48);
   }
   writeChunks(stream, GROWABLE_HEAP_I8(), ptr, length, position);
   return {
    ptr: ptr,
    allocated: true
   };
  };
  node.stream_ops = stream_ops;
  return node;
 },
 createPreloadedFile: (parent, name, url, canRead, canWrite, onload, onerror, dontCreateFile, canOwn, preFinish) => {
  var fullname = name ? PATH_FS.resolve(PATH.join2(parent, name)) : parent;
  var dep = getUniqueRunDependency("cp " + fullname);
  function processData(byteArray) {
   function finish(byteArray) {
    if (preFinish) preFinish();
    if (!dontCreateFile) {
     FS.createDataFile(parent, name, byteArray, canRead, canWrite, canOwn);
    }
    if (onload) onload();
    removeRunDependency(dep);
   }
   if (Browser.handledByPreloadPlugin(byteArray, fullname, finish, () => {
    if (onerror) onerror();
    removeRunDependency(dep);
   })) {
    return;
   }
   finish(byteArray);
  }
  addRunDependency(dep);
  if (typeof url == "string") {
   asyncLoad(url, byteArray => processData(byteArray), onerror);
  } else {
   processData(url);
  }
 },
 indexedDB: () => {
  return window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
 },
 DB_NAME: () => {
  return "EM_FS_" + window.location.pathname;
 },
 DB_VERSION: 20,
 DB_STORE_NAME: "FILE_DATA",
 saveFilesToDB: (paths, onload, onerror) => {
  onload = onload || (() => {});
  onerror = onerror || (() => {});
  var indexedDB = FS.indexedDB();
  try {
   var openRequest = indexedDB.open(FS.DB_NAME(), FS.DB_VERSION);
  } catch (e) {
   return onerror(e);
  }
  openRequest.onupgradeneeded = () => {
   out("creating db");
   var db = openRequest.result;
   db.createObjectStore(FS.DB_STORE_NAME);
  };
  openRequest.onsuccess = () => {
   var db = openRequest.result;
   var transaction = db.transaction([ FS.DB_STORE_NAME ], "readwrite");
   var files = transaction.objectStore(FS.DB_STORE_NAME);
   var ok = 0, fail = 0, total = paths.length;
   function finish() {
    if (fail == 0) onload(); else onerror();
   }
   paths.forEach(path => {
    var putRequest = files.put(FS.analyzePath(path).object.contents, path);
    putRequest.onsuccess = () => {
     ok++;
     if (ok + fail == total) finish();
    };
    putRequest.onerror = () => {
     fail++;
     if (ok + fail == total) finish();
    };
   });
   transaction.onerror = onerror;
  };
  openRequest.onerror = onerror;
 },
 loadFilesFromDB: (paths, onload, onerror) => {
  onload = onload || (() => {});
  onerror = onerror || (() => {});
  var indexedDB = FS.indexedDB();
  try {
   var openRequest = indexedDB.open(FS.DB_NAME(), FS.DB_VERSION);
  } catch (e) {
   return onerror(e);
  }
  openRequest.onupgradeneeded = onerror;
  openRequest.onsuccess = () => {
   var db = openRequest.result;
   try {
    var transaction = db.transaction([ FS.DB_STORE_NAME ], "readonly");
   } catch (e) {
    onerror(e);
    return;
   }
   var files = transaction.objectStore(FS.DB_STORE_NAME);
   var ok = 0, fail = 0, total = paths.length;
   function finish() {
    if (fail == 0) onload(); else onerror();
   }
   paths.forEach(path => {
    var getRequest = files.get(path);
    getRequest.onsuccess = () => {
     if (FS.analyzePath(path).exists) {
      FS.unlink(path);
     }
     FS.createDataFile(PATH.dirname(path), PATH.basename(path), getRequest.result, true, true, true);
     ok++;
     if (ok + fail == total) finish();
    };
    getRequest.onerror = () => {
     fail++;
     if (ok + fail == total) finish();
    };
   });
   transaction.onerror = onerror;
  };
  openRequest.onerror = onerror;
 },
 absolutePath: () => {
  abort("FS.absolutePath has been removed; use PATH_FS.resolve instead");
 },
 createFolder: () => {
  abort("FS.createFolder has been removed; use FS.mkdir instead");
 },
 createLink: () => {
  abort("FS.createLink has been removed; use FS.symlink instead");
 },
 joinPath: () => {
  abort("FS.joinPath has been removed; use PATH.join instead");
 },
 mmapAlloc: () => {
  abort("FS.mmapAlloc has been replaced by the top level function mmapAlloc");
 },
 standardizePath: () => {
  abort("FS.standardizePath has been removed; use PATH.normalize instead");
 }
};

Module["FS"] = FS;

var SYSCALLS = {
 DEFAULT_POLLMASK: 5,
 calculateAt: function(dirfd, path, allowEmpty) {
  if (PATH.isAbs(path)) {
   return path;
  }
  var dir;
  if (dirfd === -100) {
   dir = FS.cwd();
  } else {
   var dirstream = FS.getStream(dirfd);
   if (!dirstream) throw new FS.ErrnoError(8);
   dir = dirstream.path;
  }
  if (path.length == 0) {
   if (!allowEmpty) {
    throw new FS.ErrnoError(44);
   }
   return dir;
  }
  return PATH.join2(dir, path);
 },
 doStat: function(func, path, buf) {
  try {
   var stat = func(path);
  } catch (e) {
   if (e && e.node && PATH.normalize(path) !== PATH.normalize(FS.getPath(e.node))) {
    return -54;
   }
   throw e;
  }
  GROWABLE_HEAP_I32()[buf >>> 2] = stat.dev;
  GROWABLE_HEAP_I32()[buf + 4 >>> 2] = 0;
  GROWABLE_HEAP_I32()[buf + 8 >>> 2] = stat.ino;
  GROWABLE_HEAP_I32()[buf + 12 >>> 2] = stat.mode;
  GROWABLE_HEAP_I32()[buf + 16 >>> 2] = stat.nlink;
  GROWABLE_HEAP_I32()[buf + 20 >>> 2] = stat.uid;
  GROWABLE_HEAP_I32()[buf + 24 >>> 2] = stat.gid;
  GROWABLE_HEAP_I32()[buf + 28 >>> 2] = stat.rdev;
  GROWABLE_HEAP_I32()[buf + 32 >>> 2] = 0;
  tempI64 = [ stat.size >>> 0, (tempDouble = stat.size, +Math.abs(tempDouble) >= 1 ? tempDouble > 0 ? (Math.min(+Math.floor(tempDouble / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0) ], 
  GROWABLE_HEAP_I32()[buf + 40 >>> 2] = tempI64[0], GROWABLE_HEAP_I32()[buf + 44 >>> 2] = tempI64[1];
  GROWABLE_HEAP_I32()[buf + 48 >>> 2] = 4096;
  GROWABLE_HEAP_I32()[buf + 52 >>> 2] = stat.blocks;
  GROWABLE_HEAP_I32()[buf + 56 >>> 2] = stat.atime.getTime() / 1e3 | 0;
  GROWABLE_HEAP_I32()[buf + 60 >>> 2] = 0;
  GROWABLE_HEAP_I32()[buf + 64 >>> 2] = stat.mtime.getTime() / 1e3 | 0;
  GROWABLE_HEAP_I32()[buf + 68 >>> 2] = 0;
  GROWABLE_HEAP_I32()[buf + 72 >>> 2] = stat.ctime.getTime() / 1e3 | 0;
  GROWABLE_HEAP_I32()[buf + 76 >>> 2] = 0;
  tempI64 = [ stat.ino >>> 0, (tempDouble = stat.ino, +Math.abs(tempDouble) >= 1 ? tempDouble > 0 ? (Math.min(+Math.floor(tempDouble / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0) ], 
  GROWABLE_HEAP_I32()[buf + 80 >>> 2] = tempI64[0], GROWABLE_HEAP_I32()[buf + 84 >>> 2] = tempI64[1];
  return 0;
 },
 doMsync: function(addr, stream, len, flags, offset) {
  var buffer = GROWABLE_HEAP_U8().slice(addr, addr + len);
  FS.msync(stream, buffer, offset, len, flags);
 },
 varargs: undefined,
 get: function() {
  assert(SYSCALLS.varargs != undefined);
  SYSCALLS.varargs += 4;
  var ret = GROWABLE_HEAP_I32()[SYSCALLS.varargs - 4 >>> 2];
  return ret;
 },
 getStr: function(ptr) {
  var ret = UTF8ToString(ptr);
  return ret;
 },
 getStreamFromFD: function(fd) {
  var stream = FS.getStream(fd);
  if (!stream) throw new FS.ErrnoError(8);
  return stream;
 }
};

Module["SYSCALLS"] = SYSCALLS;

function _fd_write(fd, iov, iovcnt, pnum) {
 if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(2, 1, fd, iov, iovcnt, pnum);
 try {
  var stream = SYSCALLS.getStreamFromFD(fd);
  var num = doWritev(stream, iov, iovcnt);
  GROWABLE_HEAP_U32()[pnum >>> 2] = num;
  return 0;
 } catch (e) {
  if (typeof FS == "undefined" || !(e instanceof FS.ErrnoError)) throw e;
  return e.errno;
 }
}

Module["_fd_write"] = _fd_write;

_fd_write.sig = "iippp";

function _myAdd() {
 if (!Module["_myAdd"]) abort("external symbol 'myAdd' is missing. perhaps a side module was not linked in? if this function was expected to arrive from a system library, try to build the MAIN_MODULE with EMCC_FORCE_STDLIBS=1 in the environment");
 return Module["_myAdd"].apply(null, arguments);
}

_myAdd.stub = true;

function _setTempRet0(val) {
 setTempRet0(val);
}

Module["_setTempRet0"] = _setTempRet0;

_setTempRet0.sig = "vi";

PThread.init();

embind_init_charCodes();

BindingError = Module["BindingError"] = extendError(Error, "BindingError");

InternalError = Module["InternalError"] = extendError(Error, "InternalError");

init_emval();

var FSNode = function(parent, name, mode, rdev) {
 if (!parent) {
  parent = this;
 }
 this.parent = parent;
 this.mount = parent.mount;
 this.mounted = null;
 this.id = FS.nextInode++;
 this.name = name;
 this.mode = mode;
 this.node_ops = {};
 this.stream_ops = {};
 this.rdev = rdev;
};

var readMode = 292 | 73;

var writeMode = 146;

Object.defineProperties(FSNode.prototype, {
 read: {
  get: function() {
   return (this.mode & readMode) === readMode;
  },
  set: function(val) {
   val ? this.mode |= readMode : this.mode &= ~readMode;
  }
 },
 write: {
  get: function() {
   return (this.mode & writeMode) === writeMode;
  },
  set: function(val) {
   val ? this.mode |= writeMode : this.mode &= ~writeMode;
  }
 },
 isFolder: {
  get: function() {
   return FS.isDir(this.mode);
  }
 },
 isDevice: {
  get: function() {
   return FS.isChrdev(this.mode);
  }
 }
});

FS.FSNode = FSNode;

FS.staticInit();

Module["FS_createPath"] = FS.createPath;

Module["FS_createDataFile"] = FS.createDataFile;

Module["FS_createPreloadedFile"] = FS.createPreloadedFile;

Module["FS_unlink"] = FS.unlink;

Module["FS_createLazyFile"] = FS.createLazyFile;

Module["FS_createDevice"] = FS.createDevice;

ERRNO_CODES = {
 "EPERM": 63,
 "ENOENT": 44,
 "ESRCH": 71,
 "EINTR": 27,
 "EIO": 29,
 "ENXIO": 60,
 "E2BIG": 1,
 "ENOEXEC": 45,
 "EBADF": 8,
 "ECHILD": 12,
 "EAGAIN": 6,
 "EWOULDBLOCK": 6,
 "ENOMEM": 48,
 "EACCES": 2,
 "EFAULT": 21,
 "ENOTBLK": 105,
 "EBUSY": 10,
 "EEXIST": 20,
 "EXDEV": 75,
 "ENODEV": 43,
 "ENOTDIR": 54,
 "EISDIR": 31,
 "EINVAL": 28,
 "ENFILE": 41,
 "EMFILE": 33,
 "ENOTTY": 59,
 "ETXTBSY": 74,
 "EFBIG": 22,
 "ENOSPC": 51,
 "ESPIPE": 70,
 "EROFS": 69,
 "EMLINK": 34,
 "EPIPE": 64,
 "EDOM": 18,
 "ERANGE": 68,
 "ENOMSG": 49,
 "EIDRM": 24,
 "ECHRNG": 106,
 "EL2NSYNC": 156,
 "EL3HLT": 107,
 "EL3RST": 108,
 "ELNRNG": 109,
 "EUNATCH": 110,
 "ENOCSI": 111,
 "EL2HLT": 112,
 "EDEADLK": 16,
 "ENOLCK": 46,
 "EBADE": 113,
 "EBADR": 114,
 "EXFULL": 115,
 "ENOANO": 104,
 "EBADRQC": 103,
 "EBADSLT": 102,
 "EDEADLOCK": 16,
 "EBFONT": 101,
 "ENOSTR": 100,
 "ENODATA": 116,
 "ETIME": 117,
 "ENOSR": 118,
 "ENONET": 119,
 "ENOPKG": 120,
 "EREMOTE": 121,
 "ENOLINK": 47,
 "EADV": 122,
 "ESRMNT": 123,
 "ECOMM": 124,
 "EPROTO": 65,
 "EMULTIHOP": 36,
 "EDOTDOT": 125,
 "EBADMSG": 9,
 "ENOTUNIQ": 126,
 "EBADFD": 127,
 "EREMCHG": 128,
 "ELIBACC": 129,
 "ELIBBAD": 130,
 "ELIBSCN": 131,
 "ELIBMAX": 132,
 "ELIBEXEC": 133,
 "ENOSYS": 52,
 "ENOTEMPTY": 55,
 "ENAMETOOLONG": 37,
 "ELOOP": 32,
 "EOPNOTSUPP": 138,
 "EPFNOSUPPORT": 139,
 "ECONNRESET": 15,
 "ENOBUFS": 42,
 "EAFNOSUPPORT": 5,
 "EPROTOTYPE": 67,
 "ENOTSOCK": 57,
 "ENOPROTOOPT": 50,
 "ESHUTDOWN": 140,
 "ECONNREFUSED": 14,
 "EADDRINUSE": 3,
 "ECONNABORTED": 13,
 "ENETUNREACH": 40,
 "ENETDOWN": 38,
 "ETIMEDOUT": 73,
 "EHOSTDOWN": 142,
 "EHOSTUNREACH": 23,
 "EINPROGRESS": 26,
 "EALREADY": 7,
 "EDESTADDRREQ": 17,
 "EMSGSIZE": 35,
 "EPROTONOSUPPORT": 66,
 "ESOCKTNOSUPPORT": 137,
 "EADDRNOTAVAIL": 4,
 "ENETRESET": 39,
 "EISCONN": 30,
 "ENOTCONN": 53,
 "ETOOMANYREFS": 141,
 "EUSERS": 136,
 "EDQUOT": 19,
 "ESTALE": 72,
 "ENOTSUP": 138,
 "ENOMEDIUM": 148,
 "EILSEQ": 25,
 "EOVERFLOW": 61,
 "ECANCELED": 11,
 "ENOTRECOVERABLE": 56,
 "EOWNERDEAD": 62,
 "ESTRPIPE": 135
};

var proxiedFunctionTable = [ null, exitOnMainThread, _fd_write ];

var ASSERTIONS = true;

function intArrayFromString(stringy, dontAddNull, length) {
 var len = length > 0 ? length : lengthBytesUTF8(stringy) + 1;
 var u8array = new Array(len);
 var numBytesWritten = stringToUTF8Array(stringy, u8array, 0, u8array.length);
 if (dontAddNull) u8array.length = numBytesWritten;
 return u8array;
}

function intArrayToString(array) {
 var ret = [];
 for (var i = 0; i < array.length; i++) {
  var chr = array[i];
  if (chr > 255) {
   if (ASSERTIONS) {
    assert(false, "Character code " + chr + " (" + String.fromCharCode(chr) + ")  at offset " + i + " not in 0x00-0xFF.");
   }
   chr &= 255;
  }
  ret.push(String.fromCharCode(chr));
 }
 return ret.join("");
}

var decodeBase64 = typeof atob == "function" ? atob : function(input) {
 var keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
 var output = "";
 var chr1, chr2, chr3;
 var enc1, enc2, enc3, enc4;
 var i = 0;
 input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
 do {
  enc1 = keyStr.indexOf(input.charAt(i++));
  enc2 = keyStr.indexOf(input.charAt(i++));
  enc3 = keyStr.indexOf(input.charAt(i++));
  enc4 = keyStr.indexOf(input.charAt(i++));
  chr1 = enc1 << 2 | enc2 >> 4;
  chr2 = (enc2 & 15) << 4 | enc3 >> 2;
  chr3 = (enc3 & 3) << 6 | enc4;
  output = output + String.fromCharCode(chr1);
  if (enc3 !== 64) {
   output = output + String.fromCharCode(chr2);
  }
  if (enc4 !== 64) {
   output = output + String.fromCharCode(chr3);
  }
 } while (i < input.length);
 return output;
};

function intArrayFromBase64(s) {
 try {
  var decoded = decodeBase64(s);
  var bytes = new Uint8Array(decoded.length);
  for (var i = 0; i < decoded.length; ++i) {
   bytes[i] = decoded.charCodeAt(i);
  }
  return bytes;
 } catch (_) {
  throw new Error("Converting base64 string to bytes failed.");
 }
}

function tryParseAsDataURI(filename) {
 if (!isDataURI(filename)) {
  return;
 }
 return intArrayFromBase64(filename.slice(dataURIPrefix.length));
}

function checkIncomingModuleAPI() {
 ignoredModuleProp("fetchSettings");
}

var asmLibraryArg = {
 "_ZN4Math7mathAddEii": __ZN4Math7mathAddEii,
 "_ZN4MathC1Ev": __ZN4MathC1Ev,
 "_ZN4MathD1Ev": __ZN4MathD1Ev,
 "__assert_fail": ___assert_fail,
 "__emscripten_init_main_thread_js": ___emscripten_init_main_thread_js,
 "__emscripten_thread_cleanup": ___emscripten_thread_cleanup,
 "__heap_base": ___heap_base,
 "__indirect_function_table": wasmTable,
 "__memory_base": ___memory_base,
 "__stack_pointer": ___stack_pointer,
 "__table_base": ___table_base,
 "_embind_register_bigint": __embind_register_bigint,
 "_embind_register_bool": __embind_register_bool,
 "_embind_register_emval": __embind_register_emval,
 "_embind_register_float": __embind_register_float,
 "_embind_register_integer": __embind_register_integer,
 "_embind_register_memory_view": __embind_register_memory_view,
 "_embind_register_std_string": __embind_register_std_string,
 "_embind_register_std_wstring": __embind_register_std_wstring,
 "_embind_register_void": __embind_register_void,
 "_emscripten_date_now": __emscripten_date_now,
 "_emscripten_get_now_is_monotonic": __emscripten_get_now_is_monotonic,
 "_emscripten_notify_task_queue": __emscripten_notify_task_queue,
 "_emscripten_set_offscreencanvas_size": __emscripten_set_offscreencanvas_size,
 "emscripten_get_now": _emscripten_get_now,
 "emscripten_memcpy_big": _emscripten_memcpy_big,
 "emscripten_receive_on_main_thread_js": _emscripten_receive_on_main_thread_js,
 "emscripten_resize_heap": _emscripten_resize_heap,
 "emscripten_unwind_to_js_event_loop": _emscripten_unwind_to_js_event_loop,
 "exit": _exit,
 "fd_write": _fd_write,
 "memory": wasmMemory || Module["wasmMemory"],
 "myAdd": _myAdd,
 "setTempRet0": _setTempRet0
};

var asm = createWasm();

var ___wasm_call_ctors = Module["___wasm_call_ctors"] = createExportWrapper("__wasm_call_ctors");

var ___wasm_apply_data_relocs = Module["___wasm_apply_data_relocs"] = createExportWrapper("__wasm_apply_data_relocs");

var _main = Module["_main"] = createExportWrapper("main");

var __emscripten_tls_init = Module["__emscripten_tls_init"] = createExportWrapper("_emscripten_tls_init");

var _pthread_self = Module["_pthread_self"] = createExportWrapper("pthread_self");

var _emscripten_builtin_memalign = Module["_emscripten_builtin_memalign"] = createExportWrapper("emscripten_builtin_memalign");

var _malloc = Module["_malloc"] = createExportWrapper("malloc");

var _free = Module["_free"] = createExportWrapper("free");

var ___getTypeName = Module["___getTypeName"] = createExportWrapper("__getTypeName");

var ___embind_register_native_and_builtin_types = Module["___embind_register_native_and_builtin_types"] = createExportWrapper("__embind_register_native_and_builtin_types");

var ___errno_location = Module["___errno_location"] = createExportWrapper("__errno_location");

var ___dl_seterr = Module["___dl_seterr"] = createExportWrapper("__dl_seterr");

var __emscripten_thread_sync_code = Module["__emscripten_thread_sync_code"] = createExportWrapper("_emscripten_thread_sync_code");

var __emscripten_thread_init = Module["__emscripten_thread_init"] = createExportWrapper("_emscripten_thread_init");

var __emscripten_thread_crashed = Module["__emscripten_thread_crashed"] = createExportWrapper("_emscripten_thread_crashed");

var _emscripten_main_thread_process_queued_calls = Module["_emscripten_main_thread_process_queued_calls"] = createExportWrapper("emscripten_main_thread_process_queued_calls");

var _fflush = Module["_fflush"] = createExportWrapper("fflush");

var _htons = Module["_htons"] = createExportWrapper("htons");

var _emscripten_main_browser_thread_id = Module["_emscripten_main_browser_thread_id"] = createExportWrapper("emscripten_main_browser_thread_id");

var _emscripten_run_in_main_runtime_thread_js = Module["_emscripten_run_in_main_runtime_thread_js"] = createExportWrapper("emscripten_run_in_main_runtime_thread_js");

var _emscripten_dispatch_to_thread_ = Module["_emscripten_dispatch_to_thread_"] = createExportWrapper("emscripten_dispatch_to_thread_");

var _emscripten_stack_get_base = Module["_emscripten_stack_get_base"] = function() {
 return (_emscripten_stack_get_base = Module["_emscripten_stack_get_base"] = Module["asm"]["emscripten_stack_get_base"]).apply(null, arguments);
};

var _emscripten_stack_get_end = Module["_emscripten_stack_get_end"] = function() {
 return (_emscripten_stack_get_end = Module["_emscripten_stack_get_end"] = Module["asm"]["emscripten_stack_get_end"]).apply(null, arguments);
};

var _ntohs = Module["_ntohs"] = createExportWrapper("ntohs");

var __emscripten_proxy_execute_task_queue = Module["__emscripten_proxy_execute_task_queue"] = createExportWrapper("_emscripten_proxy_execute_task_queue");

var __emscripten_thread_free_data = Module["__emscripten_thread_free_data"] = createExportWrapper("_emscripten_thread_free_data");

var __emscripten_thread_exit = Module["__emscripten_thread_exit"] = createExportWrapper("_emscripten_thread_exit");

var _setThrew = Module["_setThrew"] = createExportWrapper("setThrew");

var _emscripten_stack_set_limits = Module["_emscripten_stack_set_limits"] = function() {
 return (_emscripten_stack_set_limits = Module["_emscripten_stack_set_limits"] = Module["asm"]["emscripten_stack_set_limits"]).apply(null, arguments);
};

var _emscripten_stack_get_free = Module["_emscripten_stack_get_free"] = function() {
 return (_emscripten_stack_get_free = Module["_emscripten_stack_get_free"] = Module["asm"]["emscripten_stack_get_free"]).apply(null, arguments);
};

var stackSave = Module["stackSave"] = createExportWrapper("stackSave");

var stackRestore = Module["stackRestore"] = createExportWrapper("stackRestore");

var stackAlloc = Module["stackAlloc"] = createExportWrapper("stackAlloc");

var dynCall_jiji = Module["dynCall_jiji"] = createExportWrapper("dynCall_jiji");

unexportedRuntimeFunction("ccall", false);

unexportedRuntimeFunction("cwrap", false);

Module["allocate"] = allocate;

unexportedRuntimeFunction("UTF8ArrayToString", false);

Module["UTF8ToString"] = UTF8ToString;

unexportedRuntimeFunction("stringToUTF8Array", false);

unexportedRuntimeFunction("stringToUTF8", false);

unexportedRuntimeFunction("lengthBytesUTF8", false);

unexportedRuntimeFunction("addOnPreRun", false);

unexportedRuntimeFunction("addOnInit", false);

unexportedRuntimeFunction("addOnPreMain", false);

unexportedRuntimeFunction("addOnExit", false);

unexportedRuntimeFunction("addOnPostRun", false);

Module["addRunDependency"] = addRunDependency;

Module["removeRunDependency"] = removeRunDependency;

unexportedRuntimeFunction("FS_createFolder", false);

Module["FS_createPath"] = FS.createPath;

Module["FS_createDataFile"] = FS.createDataFile;

Module["FS_createPreloadedFile"] = FS.createPreloadedFile;

Module["FS_createLazyFile"] = FS.createLazyFile;

unexportedRuntimeFunction("FS_createLink", false);

Module["FS_createDevice"] = FS.createDevice;

Module["FS_unlink"] = FS.unlink;

unexportedRuntimeFunction("getLEB", false);

unexportedRuntimeFunction("getFunctionTables", false);

unexportedRuntimeFunction("alignFunctionTables", false);

unexportedRuntimeFunction("registerFunctions", false);

unexportedRuntimeFunction("addFunction", false);

unexportedRuntimeFunction("removeFunction", false);

unexportedRuntimeFunction("prettyPrint", false);

unexportedRuntimeFunction("getCompilerSetting", false);

unexportedRuntimeFunction("print", false);

unexportedRuntimeFunction("printErr", false);

unexportedRuntimeFunction("getTempRet0", false);

unexportedRuntimeFunction("setTempRet0", false);

unexportedRuntimeFunction("callMain", false);

unexportedRuntimeFunction("abort", false);

Module["keepRuntimeAlive"] = keepRuntimeAlive;

Module["wasmMemory"] = wasmMemory;

unexportedRuntimeFunction("GROWABLE_HEAP_I8", false);

unexportedRuntimeFunction("GROWABLE_HEAP_U8", false);

unexportedRuntimeFunction("GROWABLE_HEAP_I16", false);

unexportedRuntimeFunction("GROWABLE_HEAP_U16", false);

unexportedRuntimeFunction("GROWABLE_HEAP_I32", false);

unexportedRuntimeFunction("GROWABLE_HEAP_U32", false);

unexportedRuntimeFunction("GROWABLE_HEAP_F32", false);

unexportedRuntimeFunction("GROWABLE_HEAP_F64", false);

unexportedRuntimeFunction("warnOnce", false);

unexportedRuntimeFunction("stackSave", false);

unexportedRuntimeFunction("stackRestore", false);

unexportedRuntimeFunction("stackAlloc", false);

unexportedRuntimeFunction("AsciiToString", false);

unexportedRuntimeFunction("stringToAscii", false);

unexportedRuntimeFunction("UTF16ToString", false);

unexportedRuntimeFunction("stringToUTF16", false);

unexportedRuntimeFunction("lengthBytesUTF16", false);

unexportedRuntimeFunction("UTF32ToString", false);

unexportedRuntimeFunction("stringToUTF32", false);

unexportedRuntimeFunction("lengthBytesUTF32", false);

Module["allocateUTF8"] = allocateUTF8;

unexportedRuntimeFunction("allocateUTF8OnStack", false);

Module["ExitStatus"] = ExitStatus;

unexportedRuntimeFunction("intArrayFromString", false);

unexportedRuntimeFunction("intArrayToString", false);

unexportedRuntimeFunction("writeStringToMemory", false);

unexportedRuntimeFunction("writeArrayToMemory", false);

unexportedRuntimeFunction("writeAsciiToMemory", false);

Module["writeStackCookie"] = writeStackCookie;

Module["checkStackCookie"] = checkStackCookie;

unexportedRuntimeFunction("ptrToString", false);

unexportedRuntimeFunction("zeroMemory", false);

unexportedRuntimeFunction("stringToNewUTF8", false);

unexportedRuntimeFunction("getHeapMax", false);

unexportedRuntimeFunction("emscripten_realloc_buffer", false);

unexportedRuntimeFunction("ENV", false);

unexportedRuntimeFunction("ERRNO_CODES", false);

unexportedRuntimeFunction("ERRNO_MESSAGES", false);

unexportedRuntimeFunction("setErrNo", false);

unexportedRuntimeFunction("inetPton4", false);

unexportedRuntimeFunction("inetNtop4", false);

unexportedRuntimeFunction("inetPton6", false);

unexportedRuntimeFunction("inetNtop6", false);

unexportedRuntimeFunction("readSockaddr", false);

unexportedRuntimeFunction("writeSockaddr", false);

unexportedRuntimeFunction("DNS", false);

unexportedRuntimeFunction("getHostByName", false);

unexportedRuntimeFunction("Protocols", false);

unexportedRuntimeFunction("Sockets", false);

unexportedRuntimeFunction("getRandomDevice", false);

unexportedRuntimeFunction("traverseStack", false);

unexportedRuntimeFunction("UNWIND_CACHE", false);

unexportedRuntimeFunction("convertPCtoSourceLocation", false);

unexportedRuntimeFunction("readAsmConstArgsArray", false);

unexportedRuntimeFunction("readAsmConstArgs", false);

unexportedRuntimeFunction("mainThreadEM_ASM", false);

unexportedRuntimeFunction("jstoi_q", false);

unexportedRuntimeFunction("jstoi_s", false);

unexportedRuntimeFunction("getExecutableName", false);

unexportedRuntimeFunction("listenOnce", false);

unexportedRuntimeFunction("autoResumeAudioContext", false);

unexportedRuntimeFunction("dynCallLegacy", false);

unexportedRuntimeFunction("getDynCaller", false);

unexportedRuntimeFunction("dynCall", false);

unexportedRuntimeFunction("handleException", false);

unexportedRuntimeFunction("runtimeKeepalivePush", false);

unexportedRuntimeFunction("runtimeKeepalivePop", false);

unexportedRuntimeFunction("callUserCallback", false);

unexportedRuntimeFunction("maybeExit", false);

unexportedRuntimeFunction("safeSetTimeout", false);

unexportedRuntimeFunction("asmjsMangle", false);

unexportedRuntimeFunction("asyncLoad", false);

unexportedRuntimeFunction("alignMemory", false);

unexportedRuntimeFunction("mmapAlloc", false);

unexportedRuntimeFunction("writeI53ToI64", false);

unexportedRuntimeFunction("writeI53ToI64Clamped", false);

unexportedRuntimeFunction("writeI53ToI64Signaling", false);

unexportedRuntimeFunction("writeI53ToU64Clamped", false);

unexportedRuntimeFunction("writeI53ToU64Signaling", false);

unexportedRuntimeFunction("readI53FromI64", false);

unexportedRuntimeFunction("readI53FromU64", false);

unexportedRuntimeFunction("convertI32PairToI53", false);

unexportedRuntimeFunction("convertI32PairToI53Checked", false);

unexportedRuntimeFunction("convertU32PairToI53", false);

unexportedRuntimeFunction("reallyNegative", false);

unexportedRuntimeFunction("unSign", false);

unexportedRuntimeFunction("strLen", false);

unexportedRuntimeFunction("reSign", false);

unexportedRuntimeFunction("formatString", false);

unexportedRuntimeFunction("setValue", false);

unexportedRuntimeFunction("getValue", false);

unexportedRuntimeFunction("PATH", false);

unexportedRuntimeFunction("PATH_FS", false);

unexportedRuntimeFunction("SYSCALLS", false);

unexportedRuntimeFunction("getSocketFromFD", false);

unexportedRuntimeFunction("getSocketAddress", false);

unexportedRuntimeFunction("JSEvents", false);

unexportedRuntimeFunction("registerKeyEventCallback", false);

unexportedRuntimeFunction("specialHTMLTargets", false);

unexportedRuntimeFunction("maybeCStringToJsString", false);

unexportedRuntimeFunction("findEventTarget", false);

unexportedRuntimeFunction("findCanvasEventTarget", false);

unexportedRuntimeFunction("getBoundingClientRect", false);

unexportedRuntimeFunction("fillMouseEventData", false);

unexportedRuntimeFunction("registerMouseEventCallback", false);

unexportedRuntimeFunction("registerWheelEventCallback", false);

unexportedRuntimeFunction("registerUiEventCallback", false);

unexportedRuntimeFunction("registerFocusEventCallback", false);

unexportedRuntimeFunction("fillDeviceOrientationEventData", false);

unexportedRuntimeFunction("registerDeviceOrientationEventCallback", false);

unexportedRuntimeFunction("fillDeviceMotionEventData", false);

unexportedRuntimeFunction("registerDeviceMotionEventCallback", false);

unexportedRuntimeFunction("screenOrientation", false);

unexportedRuntimeFunction("fillOrientationChangeEventData", false);

unexportedRuntimeFunction("registerOrientationChangeEventCallback", false);

unexportedRuntimeFunction("fillFullscreenChangeEventData", false);

unexportedRuntimeFunction("registerFullscreenChangeEventCallback", false);

unexportedRuntimeFunction("JSEvents_requestFullscreen", false);

unexportedRuntimeFunction("JSEvents_resizeCanvasForFullscreen", false);

unexportedRuntimeFunction("registerRestoreOldStyle", false);

unexportedRuntimeFunction("hideEverythingExceptGivenElement", false);

unexportedRuntimeFunction("restoreHiddenElements", false);

unexportedRuntimeFunction("setLetterbox", false);

unexportedRuntimeFunction("currentFullscreenStrategy", false);

unexportedRuntimeFunction("restoreOldWindowedStyle", false);

unexportedRuntimeFunction("softFullscreenResizeWebGLRenderTarget", false);

unexportedRuntimeFunction("doRequestFullscreen", false);

unexportedRuntimeFunction("fillPointerlockChangeEventData", false);

unexportedRuntimeFunction("registerPointerlockChangeEventCallback", false);

unexportedRuntimeFunction("registerPointerlockErrorEventCallback", false);

unexportedRuntimeFunction("requestPointerLock", false);

unexportedRuntimeFunction("fillVisibilityChangeEventData", false);

unexportedRuntimeFunction("registerVisibilityChangeEventCallback", false);

unexportedRuntimeFunction("registerTouchEventCallback", false);

unexportedRuntimeFunction("fillGamepadEventData", false);

unexportedRuntimeFunction("registerGamepadEventCallback", false);

unexportedRuntimeFunction("registerBeforeUnloadEventCallback", false);

unexportedRuntimeFunction("fillBatteryEventData", false);

unexportedRuntimeFunction("battery", false);

unexportedRuntimeFunction("registerBatteryEventCallback", false);

unexportedRuntimeFunction("setCanvasElementSize", false);

unexportedRuntimeFunction("getCanvasElementSize", false);

unexportedRuntimeFunction("demangle", false);

unexportedRuntimeFunction("demangleAll", false);

unexportedRuntimeFunction("jsStackTrace", false);

unexportedRuntimeFunction("stackTrace", false);

unexportedRuntimeFunction("getEnvStrings", false);

unexportedRuntimeFunction("checkWasiClock", false);

unexportedRuntimeFunction("doReadv", false);

unexportedRuntimeFunction("doWritev", false);

unexportedRuntimeFunction("GOT", false);

unexportedRuntimeFunction("CurrentModuleWeakSymbols", false);

unexportedRuntimeFunction("LDSO", false);

unexportedRuntimeFunction("getMemory", false);

unexportedRuntimeFunction("mergeLibSymbols", false);

unexportedRuntimeFunction("loadWebAssemblyModule", false);

unexportedRuntimeFunction("loadDynamicLibrary", false);

unexportedRuntimeFunction("dlopenInternal", false);

unexportedRuntimeFunction("setImmediateWrapped", false);

unexportedRuntimeFunction("clearImmediateWrapped", false);

unexportedRuntimeFunction("polyfillSetImmediate", false);

unexportedRuntimeFunction("uncaughtExceptionCount", false);

unexportedRuntimeFunction("exceptionLast", false);

unexportedRuntimeFunction("exceptionCaught", false);

unexportedRuntimeFunction("ExceptionInfo", false);

unexportedRuntimeFunction("exception_addRef", false);

unexportedRuntimeFunction("exception_decRef", false);

unexportedRuntimeFunction("Browser", false);

unexportedRuntimeFunction("setMainLoop", false);

unexportedRuntimeFunction("wget", false);

unexportedRuntimeFunction("FS", false);

unexportedRuntimeFunction("MEMFS", false);

unexportedRuntimeFunction("TTY", false);

unexportedRuntimeFunction("PIPEFS", false);

unexportedRuntimeFunction("SOCKFS", false);

unexportedRuntimeFunction("_setNetworkCallback", false);

unexportedRuntimeFunction("tempFixedLengthArray", false);

unexportedRuntimeFunction("miniTempWebGLFloatBuffers", false);

unexportedRuntimeFunction("heapObjectForWebGLType", false);

unexportedRuntimeFunction("heapAccessShiftForWebGLHeap", false);

unexportedRuntimeFunction("GL", false);

unexportedRuntimeFunction("emscriptenWebGLGet", false);

unexportedRuntimeFunction("computeUnpackAlignedImageSize", false);

unexportedRuntimeFunction("emscriptenWebGLGetTexPixelData", false);

unexportedRuntimeFunction("emscriptenWebGLGetUniform", false);

unexportedRuntimeFunction("webglGetUniformLocation", false);

unexportedRuntimeFunction("webglPrepareUniformLocationsBeforeFirstUse", false);

unexportedRuntimeFunction("webglGetLeftBracePos", false);

unexportedRuntimeFunction("emscriptenWebGLGetVertexAttrib", false);

unexportedRuntimeFunction("emscriptenWebGLGetBufferBinding", false);

unexportedRuntimeFunction("emscriptenWebGLValidateMapBufferTarget", false);

unexportedRuntimeFunction("writeGLArray", false);

unexportedRuntimeFunction("AL", false);

unexportedRuntimeFunction("SDL_unicode", false);

unexportedRuntimeFunction("SDL_ttfContext", false);

unexportedRuntimeFunction("SDL_audio", false);

unexportedRuntimeFunction("SDL", false);

unexportedRuntimeFunction("SDL_gfx", false);

unexportedRuntimeFunction("GLUT", false);

unexportedRuntimeFunction("EGL", false);

unexportedRuntimeFunction("GLFW_Window", false);

unexportedRuntimeFunction("GLFW", false);

unexportedRuntimeFunction("GLEW", false);

unexportedRuntimeFunction("IDBStore", false);

unexportedRuntimeFunction("runAndAbortIfError", false);

unexportedRuntimeFunction("emscriptenWebGLGetIndexed", false);

unexportedRuntimeFunction("Fetch", false);

unexportedRuntimeFunction("fetchDeleteCachedData", false);

unexportedRuntimeFunction("fetchLoadCachedData", false);

unexportedRuntimeFunction("fetchCacheData", false);

unexportedRuntimeFunction("fetchXHR", false);

Module["PThread"] = PThread;

unexportedRuntimeFunction("killThread", false);

unexportedRuntimeFunction("cleanupThread", false);

unexportedRuntimeFunction("registerTLSInit", false);

unexportedRuntimeFunction("cancelThread", false);

unexportedRuntimeFunction("spawnThread", false);

unexportedRuntimeFunction("exitOnMainThread", false);

unexportedRuntimeFunction("invokeEntryPoint", false);

unexportedRuntimeFunction("executeNotifiedProxyingQueue", false);

unexportedRuntimeFunction("InternalError", false);

unexportedRuntimeFunction("BindingError", false);

unexportedRuntimeFunction("UnboundTypeError", false);

unexportedRuntimeFunction("PureVirtualError", false);

unexportedRuntimeFunction("init_embind", false);

unexportedRuntimeFunction("throwInternalError", false);

unexportedRuntimeFunction("throwBindingError", false);

unexportedRuntimeFunction("throwUnboundTypeError", false);

unexportedRuntimeFunction("ensureOverloadTable", false);

unexportedRuntimeFunction("exposePublicSymbol", false);

unexportedRuntimeFunction("replacePublicSymbol", false);

unexportedRuntimeFunction("extendError", false);

unexportedRuntimeFunction("createNamedFunction", false);

unexportedRuntimeFunction("embindRepr", false);

unexportedRuntimeFunction("registeredInstances", false);

unexportedRuntimeFunction("getBasestPointer", false);

unexportedRuntimeFunction("registerInheritedInstance", false);

unexportedRuntimeFunction("unregisterInheritedInstance", false);

unexportedRuntimeFunction("getInheritedInstance", false);

unexportedRuntimeFunction("getInheritedInstanceCount", false);

unexportedRuntimeFunction("getLiveInheritedInstances", false);

unexportedRuntimeFunction("registeredTypes", false);

unexportedRuntimeFunction("awaitingDependencies", false);

unexportedRuntimeFunction("typeDependencies", false);

unexportedRuntimeFunction("registeredPointers", false);

unexportedRuntimeFunction("registerType", false);

unexportedRuntimeFunction("whenDependentTypesAreResolved", false);

unexportedRuntimeFunction("embind_charCodes", false);

unexportedRuntimeFunction("embind_init_charCodes", false);

unexportedRuntimeFunction("readLatin1String", false);

unexportedRuntimeFunction("getTypeName", false);

unexportedRuntimeFunction("heap32VectorToArray", false);

unexportedRuntimeFunction("requireRegisteredType", false);

unexportedRuntimeFunction("getShiftFromSize", false);

unexportedRuntimeFunction("integerReadValueFromPointer", false);

unexportedRuntimeFunction("enumReadValueFromPointer", false);

unexportedRuntimeFunction("floatReadValueFromPointer", false);

unexportedRuntimeFunction("simpleReadValueFromPointer", false);

unexportedRuntimeFunction("runDestructors", false);

unexportedRuntimeFunction("new_", false);

unexportedRuntimeFunction("craftInvokerFunction", false);

unexportedRuntimeFunction("embind__requireFunction", false);

unexportedRuntimeFunction("tupleRegistrations", false);

unexportedRuntimeFunction("structRegistrations", false);

unexportedRuntimeFunction("genericPointerToWireType", false);

unexportedRuntimeFunction("constNoSmartPtrRawPointerToWireType", false);

unexportedRuntimeFunction("nonConstNoSmartPtrRawPointerToWireType", false);

unexportedRuntimeFunction("init_RegisteredPointer", false);

unexportedRuntimeFunction("RegisteredPointer", false);

unexportedRuntimeFunction("RegisteredPointer_getPointee", false);

unexportedRuntimeFunction("RegisteredPointer_destructor", false);

unexportedRuntimeFunction("RegisteredPointer_deleteObject", false);

unexportedRuntimeFunction("RegisteredPointer_fromWireType", false);

unexportedRuntimeFunction("runDestructor", false);

unexportedRuntimeFunction("releaseClassHandle", false);

unexportedRuntimeFunction("finalizationRegistry", false);

unexportedRuntimeFunction("detachFinalizer_deps", false);

unexportedRuntimeFunction("detachFinalizer", false);

unexportedRuntimeFunction("attachFinalizer", false);

unexportedRuntimeFunction("makeClassHandle", false);

unexportedRuntimeFunction("init_ClassHandle", false);

unexportedRuntimeFunction("ClassHandle", false);

unexportedRuntimeFunction("ClassHandle_isAliasOf", false);

unexportedRuntimeFunction("throwInstanceAlreadyDeleted", false);

unexportedRuntimeFunction("ClassHandle_clone", false);

unexportedRuntimeFunction("ClassHandle_delete", false);

unexportedRuntimeFunction("deletionQueue", false);

unexportedRuntimeFunction("ClassHandle_isDeleted", false);

unexportedRuntimeFunction("ClassHandle_deleteLater", false);

unexportedRuntimeFunction("flushPendingDeletes", false);

unexportedRuntimeFunction("delayFunction", false);

unexportedRuntimeFunction("setDelayFunction", false);

unexportedRuntimeFunction("RegisteredClass", false);

unexportedRuntimeFunction("shallowCopyInternalPointer", false);

unexportedRuntimeFunction("downcastPointer", false);

unexportedRuntimeFunction("upcastPointer", false);

unexportedRuntimeFunction("validateThis", false);

unexportedRuntimeFunction("char_0", false);

unexportedRuntimeFunction("char_9", false);

unexportedRuntimeFunction("makeLegalFunctionName", false);

unexportedRuntimeFunction("emval_handle_array", false);

unexportedRuntimeFunction("emval_free_list", false);

unexportedRuntimeFunction("emval_symbols", false);

unexportedRuntimeFunction("init_emval", false);

unexportedRuntimeFunction("count_emval_handles", false);

unexportedRuntimeFunction("get_first_emval", false);

unexportedRuntimeFunction("getStringOrSymbol", false);

unexportedRuntimeFunction("Emval", false);

unexportedRuntimeFunction("emval_newers", false);

unexportedRuntimeFunction("craftEmvalAllocator", false);

unexportedRuntimeFunction("emval_get_global", false);

unexportedRuntimeFunction("emval_lookupTypes", false);

unexportedRuntimeFunction("emval_allocateDestructors", false);

unexportedRuntimeFunction("emval_methodCallers", false);

unexportedRuntimeFunction("emval_addMethodCaller", false);

unexportedRuntimeFunction("emval_registeredMethods", false);

unexportedRuntimeSymbol("ALLOC_NORMAL", false);

unexportedRuntimeSymbol("ALLOC_STACK", false);

var calledRun;

function ExitStatus(status) {
 this.name = "ExitStatus";
 this.message = "Program terminated with exit(" + status + ")";
 this.status = status;
}

var calledMain = false;

dependenciesFulfilled = function runCaller() {
 if (!calledRun) run();
 if (!calledRun) dependenciesFulfilled = runCaller;
};

function callMain(args) {
 assert(runDependencies == 0, 'cannot call main when async dependencies remain! (listen on Module["onRuntimeInitialized"])');
 assert(__ATPRERUN__.length == 0, "cannot call main when preRun functions remain to be called");
 var entryFunction = Module["_main"];
 if (!entryFunction) return;
 args = args || [];
 args.unshift(thisProgram);
 var argc = args.length;
 var argv = stackAlloc((argc + 1) * 4);
 var argv_ptr = argv >> 2;
 args.forEach(arg => {
  GROWABLE_HEAP_I32()[argv_ptr++ >>> 0] = allocateUTF8OnStack(arg);
 });
 GROWABLE_HEAP_I32()[argv_ptr >>> 0] = 0;
 try {
  var ret = entryFunction(argc, argv);
  exit(ret, true);
  return ret;
 } catch (e) {
  return handleException(e);
 } finally {
  calledMain = true;
 }
}

function stackCheckInit() {
 assert(!ENVIRONMENT_IS_PTHREAD);
 _emscripten_stack_set_limits(5249792, 6912);
 writeStackCookie();
}

var dylibsLoaded = false;

function run(args) {
 args = args || arguments_;
 if (runDependencies > 0) {
  return;
 }
 if (!ENVIRONMENT_IS_PTHREAD) stackCheckInit();
 if (!dylibsLoaded) {
  preloadDylibs();
  dylibsLoaded = true;
  if (runDependencies > 0) {
   return;
  }
 }
 if (ENVIRONMENT_IS_PTHREAD) {
  readyPromiseResolve(Module);
  initRuntime();
  postMessage({
   "cmd": "loaded"
  });
  return;
 }
 preRun();
 if (runDependencies > 0) {
  return;
 }
 function doRun() {
  if (calledRun) return;
  calledRun = true;
  Module["calledRun"] = true;
  if (ABORT) return;
  initRuntime();
  preMain();
  readyPromiseResolve(Module);
  if (Module["onRuntimeInitialized"]) Module["onRuntimeInitialized"]();
  if (shouldRunNow) callMain(args);
  postRun();
 }
 if (Module["setStatus"]) {
  Module["setStatus"]("Running...");
  setTimeout(function() {
   setTimeout(function() {
    Module["setStatus"]("");
   }, 1);
   doRun();
  }, 1);
 } else {
  doRun();
 }
 checkStackCookie();
}

Module["run"] = run;

function checkUnflushedContent() {
 var oldOut = out;
 var oldErr = err;
 var has = false;
 out = err = x => {
  has = true;
 };
 try {
  _fflush(0);
  [ "stdout", "stderr" ].forEach(function(name) {
   var info = FS.analyzePath("/dev/" + name);
   if (!info) return;
   var stream = info.object;
   var rdev = stream.rdev;
   var tty = TTY.ttys[rdev];
   if (tty && tty.output && tty.output.length) {
    has = true;
   }
  });
 } catch (e) {}
 out = oldOut;
 err = oldErr;
 if (has) {
  warnOnce("stdio streams had content in them that was not flushed. you should set EXIT_RUNTIME to 1 (see the FAQ), or make sure to emit a newline when you printf etc.");
 }
}

function exit(status, implicit) {
 EXITSTATUS = status;
 checkUnflushedContent();
 if (!implicit) {
  if (ENVIRONMENT_IS_PTHREAD) {
   exitOnMainThread(status);
   throw "unwind";
  } else {}
 }
 if (keepRuntimeAlive() && !implicit) {
  var msg = "program exited (with status: " + status + "), but EXIT_RUNTIME is not set, so halting execution but not exiting the runtime or preventing further async execution (build with EXIT_RUNTIME=1, if you want a true shutdown)";
  readyPromiseReject(msg);
  err(msg);
 }
 procExit(status);
}

function procExit(code) {
 EXITSTATUS = code;
 if (!keepRuntimeAlive()) {
  PThread.terminateAllThreads();
  if (Module["onExit"]) Module["onExit"](code);
  ABORT = true;
 }
 quit_(code, new ExitStatus(code));
}

if (Module["preInit"]) {
 if (typeof Module["preInit"] == "function") Module["preInit"] = [ Module["preInit"] ];
 while (Module["preInit"].length > 0) {
  Module["preInit"].pop()();
 }
}

var shouldRunNow = true;

if (Module["noInitialRun"]) shouldRunNow = false;

run();


  return createModule.ready
}
);
})();
if (typeof exports === 'object' && typeof module === 'object')
  module.exports = createModule;
else if (typeof define === 'function' && define['amd'])
  define([], function() { return createModule; });
else if (typeof exports === 'object')
  exports["createModule"] = createModule;
