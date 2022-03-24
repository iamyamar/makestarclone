function makestar() {
  let num = 1
  const stars = document.querySelectorAll(".star")
  let action = [...stars].forEach((star) => {
    //making fixed star out of 5
    if (star.hasAttribute("star-rating") && !star.hasAttribute("set-default")) {
      // console.log("start")
      let stars = star.getAttribute("star-rating")
      // console.log(stars)
      for (let i = 0; i < 5; i++) {
        if (i < stars) {
          const tag = document.createElement("i")
          tag.classList = "fa-solid fa-star"
          star.appendChild(tag)
        } else {
          const tag = document.createElement("i")
          tag.classList = "fa-regular fa-star"
          star.appendChild(tag)
        }
      }
    }
    //making fixed star out of dynamic total
    if (star.hasAttribute("set-default") && !star.hasAttribute("take")) {
      let total = star.getAttribute("set-default")
      let stars = star.getAttribute("star-rating")
      // console.log(total, stars)
      for (let i = 0; i < total; i++) {
        if (i < stars) {
          const tag = document.createElement("i")
          tag.classList = "fa-solid fa-star"
          star.appendChild(tag)
        } else {
          const tag = document.createElement("i")
          tag.classList = "fa-regular fa-star"
          star.appendChild(tag)
        }
      }
    }
    //take the input
    if (star.hasAttribute("take")) {
      let count = document.createAttribute("id")
      count.value = num
      star.setAttributeNode(count)
      // dynamic total stars
      if (star.hasAttribute("set-default")) {
        let total = star.getAttribute("set-default")

        for (let n = 0; n < total; n++) {
          const tag = document.createElement("i")
          const att = document.createAttribute("data-num")
          att.value = n + 1
          tag.setAttributeNode(att)
          tag.classList = "fa-regular fa-star"
          star.appendChild(tag)
          // console.log(tag)
        }

        const allstars = document.getElementById(`${num}`).childNodes
        console.log(allstars)

        allstars.forEach((elem) => {
          elem.onclick = (e) => {
            console.log(e.target.getAttribute("data-num"))
            let starlevel = elem.getAttribute("data-num")
            allstars.forEach((el) => {
              if (starlevel >= el.getAttribute("data-num")) {
                el.classList.remove("fa-regular")
                el.classList.add("fa-solid")
              } else {
                el.classList.remove("fa-solid")
                el.classList.add("fa-regular")
              }
            })
          }
        })
      } else {
        //fixed total stars i.e 5
        let total = 5

        for (let n = 0; n < total; n++) {
          const tag = document.createElement("i")
          const att = document.createAttribute("data-num")
          att.value = n + 1
          tag.setAttributeNode(att)
          tag.classList = "fa-regular fa-star"
          star.appendChild(tag)
          // console.log(tag)
        }

        const allstars = document.getElementById(`${num}`).childNodes
        console.log(allstars)

        allstars.forEach((elem) => {
          elem.onclick = (e) => {
            console.log(e.target.getAttribute("data-num"))
            let starlevel = elem.getAttribute("data-num")
            allstars.forEach((el) => {
              if (starlevel >= el.getAttribute("data-num")) {
                el.classList.remove("fa-regular")
                el.classList.add("fa-solid")
              } else {
                el.classList.remove("fa-solid")
                el.classList.add("fa-regular")
              }
            })
          }
        })
      }
      num++
    }
  })
}
export default makestar
