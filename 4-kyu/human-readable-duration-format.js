function formatDuration(seconds) {
    if (seconds === 0) {
      return 'now';
    }
  
    const years = Math.floor(seconds / (365 * 24 * 3600));
    const days = Math.floor((seconds % (365 * 24 * 3600)) / (24 * 3600));
    const hours = Math.floor((seconds % (24 * 3600)) / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const sec = seconds % 60;
  
    const components = [];
  
    if (years > 0) {
      components.push(`${years} year${years > 1 ? 's' : ''}`);
    }
  
    if (days > 0) {
      components.push(`${days} day${days > 1 ? 's' : ''}`);
    }
  
    if (hours > 0) {
      components.push(`${hours} hour${hours > 1 ? 's' : ''}`);
    }
  
    if (minutes > 0) {
      components.push(`${minutes} minute${minutes > 1 ? 's' : ''}`);
    }
  
    if (sec > 0) {
      components.push(`${sec} second${sec > 1 ? 's' : ''}`);
    }
  
    if (components.length === 1) {
      return components[0];
    }
  
    const lastComponent = components.pop();
    return components.join(', ') + ' and ' + lastComponent;
  }

//   DESCRIPTION:
//   Your task in order to complete this Kata is to write a function
//   which formats a duration, given as a number of seconds,
//   in a human-friendly way.
  
//   The function must accept a non-negative integer.
//   If it is zero, it just returns "now".
//   Otherwise, the duration is expressed as a combination of
//   years, days, hours, minutes and seconds.
  
//   It is much easier to understand with an example:
  
//   * For seconds = 62, your function should return 
//       "1 minute and 2 seconds"
//   * For seconds = 3662, your function should return
//       "1 hour, 1 minute and 2 seconds"
//   For the purpose of this Kata, a year is 365 days and a day is 24 hours.
  
//   Note that spaces are important.
  
  