function reverse_integer(x){

    if(x < 0)
        {
            x = x * -1;
            let negative = false;
        }

    let reversed = 0;

    while (x > 0)
    {
        reversed = (reversed * 10) + x % 10;
        x = x/10;
    }

    if(!negative){
        reversed = reversed * -1;
    }

    return reversed;


}