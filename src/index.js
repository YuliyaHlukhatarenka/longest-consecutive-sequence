module.exports =
    function longestConsecutiveLength(arr) {
      if (arr.length === 0) {
          return 0;
      }

      if (arr.length === 1) {
          return 1;
      }

      let sequence = [];
      let maxLength = 0;

      arr.sort((a, b) => { return a - b; });
      let prev = arr[0];
      sequence.push(prev);

      arr.slice(1, arr.length).forEach((current, index) => {
        if (current !== prev) {
            if (current - prev === 1 ) {
                if (sequence.indexOf(prev) < 0) {
                    sequence.push(prev);
                }
                sequence.push(current);
            } else {
                if (sequence.length > maxLength) {
                    maxLength = sequence.length;
                }
                sequence = [];
            }
        }
        prev = current;
      });

      return maxLength;

    }
