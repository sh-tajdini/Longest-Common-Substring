import './App.css'

function App() {
  function longestCommonSubstr(S1, S2, n, m) {
    // Initialize a 2D array to store the lengths of common substrings
    const dp = Array.from({ length: n + 1 }, () => Array(m + 1).fill(0));
    // Initialize a variable to keep track of the maximum length of the longest common substring
    let maxLen = 0;
    // Iterate through the strings and fill the dp array
    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= m; j++) {
        if (S1[i - 1] === S2[j - 1]) {
          dp[i][j] = dp[i - 1][j - 1] + 1;
          if (dp[i][j] > maxLen) {
            maxLen = dp[i][j];
          }
        }
        else {
          dp[i][j] = 0;
        }
      }
    }
    // Return the length of the longest common substring
    return maxLen;
  }

  // Driver code
  const S1 = "ABCDGH";
  const S2 = "ACDGHR";
  const n = 6;
  const m = 6;
  console.log(longestCommonSubstr(S1, S2, n, m)); // Output: 4

  const S3 = "ABC";
  const S4 = "ACB";
  const p = 3;
  const q = 3;
  console.log(longestCommonSubstr(S3, S4, p, q)); // Output: 1
}

export default App

