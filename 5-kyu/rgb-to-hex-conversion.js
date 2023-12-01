function rgb(r, g, b) {
    function componentToHex(c) {
      const hex = Math.max(0, Math.min(255, c)).toString(16).padStart(2, "0");
      return c < 0 ? '00' : c > 255 ? 'FF' : hex;
    }
  
    const hexValues = [r, g, b].map(componentToHex);
    return hexValues.join("").toUpperCase();
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