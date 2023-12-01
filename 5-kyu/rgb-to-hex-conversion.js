function rgb(r, g, b) {
    function convert(c) {
      return c < 0 ? "00" : c > 255 ? "FF" : c.toString(16).padStart(2, "0");
    }
  
    return [convert(r), convert(g), convert(b)].join("").toUpperCase();
  }

//   The rgb function is incomplete.
//   Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned.
//   Valid decimal values for RGB are 0 - 255.
//   Any values that fall out of that range must be rounded to the closest valid value.

// Examples (input --> output):

// 255, 255, 255 --> "FFFFFF"
// 255, 255, 300 --> "FFFFFF"
// 0, 0, 0       --> "000000"
// 148, 0, 211   --> "9400D3"
