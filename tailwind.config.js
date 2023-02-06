/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      maxWidth: {
        1353: "1353px",
        1210: "1210px",
        1142: "1142px",
        1010: "1010px",
        424: "424px",
        364: "364px",
        248: "248px",
        386: "386px",
      },

      fontFamily: {
        poppins: "Poppins"
      },
       
      colors: {
        brand: {
          sariq: "#FF9401"
        }
      },

      fontSize: {
        52: "52px"
      }
    },
  },
  plugins: [],
}
