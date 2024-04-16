#include<stdio.h>
#include<math.h>
float sine[100]; float rev[100];
float shift[100];
float tdfd[100];
float fdtd[100];
float c1[100];
float c2[100];
float unit[100];
float impulse[100];
int main(void)
{ int i;
int k=1;
for(i=0;i<100;i++)
{
sine[i]=sin((2*3.14*i)/100); rev[i]=sin(2*3.14*(-i)/100); //reversal shift[i]=sin(2*3.14*(i-k)/100);
//shift tdfd[i]=sin(2*3.14*(k-i)/100); //shift and fold
fdtd[i]=sin(2*3.14*(-i-k)/100); //fold and shift c1[i]=sine[i]*tdfd[i]; //convolution
c2[i]=sine[i]*shift[i]; //correlation
} for(i=0;i<100;i++)
{ if(i<0)
{
unit[i]=0;
}
else
{}}
unit[i]=1;
for(i=0;i<100;i++)
{ if(i==0)
{}
else
{}} impulse[i]=1;
impulse[i]=0;
return 0;
}