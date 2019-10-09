#include <napi.h>
#include<node_api.h>
#include <iostream>


int add(int a, int b);
Napi::Number addWrapped(const Napi::CallbackInfo& info);
Napi::Object Init(Napi::Env env, Napi::Object exports);