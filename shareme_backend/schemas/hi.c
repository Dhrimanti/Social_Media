#include <stdio.h>
#include <math.h>
#define N 100
int main() {
float y[N];
int i;
for (i = 0; i < N; i++) {
if (i >=0) {
y[i] = i;
} else {
y[i] = 0.0;
}

}

return 0;
} 