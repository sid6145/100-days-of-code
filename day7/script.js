//   Count the given numbers on your fingers and find the correct finger on which the number ends. 
 
// The first number starts from the thumb, second on the index finger, third on the middle finger, fourth on the ring finger, and fifth on the little finger.
// Again six comes on the ring finger and so on.
// Here we observer a pattern, 8(last number) and 2 ends up in 2nd position, 3rd or 7th on the middle finger, and so on.
// The pattern keeps repeating after every 8 numbers
// 1 to 8
// 9 to 16
// 17 to 24, and so on
  
  
  function countNumOnFinger(n)
    {
        let r = n % 8;
        if (r == 0)
            return 2;
        if (r < 5)
            return r;
        else
            return 10 - r;
    }

    countNumOnFinger(10)