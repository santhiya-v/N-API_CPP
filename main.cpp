#include "main.hpp"

int add(int a, int b){
    return a+b;
}

//int main() {
//    std::cout << "Hello, World!" << std::endl;
//    int sum = add(5, 6);
//    std::cout<<"Sum : "<<sum<<std::endl;
//    return 0;
//}


Napi::Number addWrapped(const Napi::CallbackInfo& info)
{
    Napi::Env env = info.Env();
    if(info.Length()<0 || !info[0].IsNumber()){
        Napi::TypeError::New(env, "String Expected").ThrowAsJavaScriptException();
    }

    Napi::Number first = info[0].As<Napi::Number>();
    Napi::Number second = info[1].As<Napi::Number>();
    int returnValue = add(first.Int32Value(), second.Int32Value());

    return Napi::Number::New(env, returnValue);
}

Napi::Object Init(Napi::Env env, Napi::Object exports)
{
    exports.Set("addTwoNum", Napi::Function::New(env, addWrapped));
    return exports;
}

Napi::Object InitAll(Napi::Env env, Napi::Object exports) {
  return Init(env, exports);
}

NODE_API_MODULE(mingw_test, InitAll)