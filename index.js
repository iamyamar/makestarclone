function makestar() {
  const star = document.querySelector(".star")

  if (star.hasAttribute("star-rating") && !star.hasAttribute("set-default")) {
    console.log("start")
    let stars = star.getAttribute("star-rating")
    console.log(stars)
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

  if (star.hasAttribute("set-default") && !star.hasAttribute("take")) {
    let total = star.getAttribute("set-default")
    let stars = star.getAttribute("star-rating")
    console.log(total, stars)
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

  if (star.hasAttribute("take")) {
    if (star.hasAttribute("set-default")) {
      let total = star.getAttribute("set-default")

      for (let i = 0; i < total; i++) {
        const tag = document.createElement("i")
        const att = document.createAttribute("data-num")
        att.value = i + 1
        tag.setAttributeNode(att)
        tag.classList = "fa-regular fa-star"
        star.appendChild(tag)
      }

      const allstars = document.querySelectorAll(".fa-star")

      allstars.forEach((elem) => {
        elem.onclick = (e) => {
          let starlevel = elem.getAttribute("data-num")
          console.log(starlevel)

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
      let total = 5

      for (let i = 0; i < total; i++) {
        const tag = document.createElement("i")
        const att = document.createAttribute("data-num")
        att.value = i + 1
        tag.setAttributeNode(att)
        tag.classList = "fa-regular fa-star"
        star.appendChild(tag)
      }

      const allstars = document.querySelectorAll(".fa-star")

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
  }
}

export default makestar
