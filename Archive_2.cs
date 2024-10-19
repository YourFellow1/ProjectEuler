// 

List<int> multiples = new List<int>();

        for(int i = 3; i <1000; i++)
        {
            if((i % 3 == 0) || (i % 5 == 0))
        {
        multiples.Add(i);
        }

    }
    // convert it to Array
    int[] arMul = multiples.ToArray();


    // count 'em up
    int answer = arMul.Sum();
     
    // share
    Console.WriteLine(answer);
    }