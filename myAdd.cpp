#include "myAdd.h"

int EMSCRIPTEN_KEEPALIVE  myAdd(int a, int b)
{
	return a + b;
}

Math::Math()
{

}

Math::~Math()
{

}

double Math::mathAdd(int a, int b)
{
	return a + b;
}