// import React from 'react'

// function Device() {
//   return (
//     <div>Device</div>
//   )
// }

// export default Device

const size = {
  mobileM: "380px",
  mobileL: "1000px",
  laptop: "1023px",
};
//

export const device = {
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  laptop: `(min-width: ${size.laptop})`,
};
