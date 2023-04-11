#include <iostream>
#include <stdio.h>
#include "myAdd.h"
#ifdef __EMSCRIPTEN__
#include "emscripten/emscripten.h"
#include "emscripten/fetch.h"
#include "emscripten/val.h"
#include "emscripten/bind.h"
#endif

int main()
{
	printf("Test Dynamic Linking... ...\n");
	int res = myAdd(10, 18);
	printf("myAdd res is: %d\n", res);

	Math math;
	int resMath = math.mathAdd(100,180);
	printf("mathAdd res is: %d\n", resMath);
}
