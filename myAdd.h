#pragma once
#ifdef __EMSCRIPTEN__
#include "emscripten/emscripten.h"
#include "emscripten/fetch.h"
#include "emscripten/val.h"
#include "emscripten/bind.h"
#endif

extern "C" int myAdd(int a, int b);

class Math
{
public:
	Math();
	~Math();

public:
	double mathAdd(int a, int b);
};
