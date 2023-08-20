// tạo mảng môn học đăng ký //
var subjectList = [
    {
        id: "QTTC",
        name: "Quản trị tài chính IT01",
        class: "IT01",
        img: "../img/s9.jpg",
        course: 3,
        price_course: 700000,
        teacher: "Phạm Quốc Anh",
        timeLine: ["mon2", "tue1"],
    },
    {
        id: "GTQT",
        name: "Giáo trình luật quốc tế IT01",
        class: "IT01",
        img: "../img/s8.jpg",
        course: 4,
        price_course: 700000,
        teacher: "Phạm Quốc Anh",
        timeLine: ["mon1", "tue3", "wed1"],
    },
    {
        id: "PLDC",
        name: "Pháp luật đại cương IT01",
        class: "IT01",
        img: "../img/â1.jpg",
        course: 4,
        price_course: 700000,
        teacher: "Phạm Quốc Anh",
        timeLine: ["thur1", "fri3"],
    },
    {
        id: "LTM",
        name: "Luật thương mại IT01",
        class: "IT01",
        img: "../img/â5.jpg",
        course: 3,
        price_course: 700000,
        teacher: "Phạm Quốc Anh",
        timeLine: ["thur3", "sat2"],
    },
]

// mảng lưu môn học đã chọn//
var subjectRegistedList = [

]

//  thêm môn học vào mảng môn học đã chọn//
function addCart(index) {

    var checkExist = subjectRegistedList.filter(sub => sub.id == subjectList[index].id)
    if (checkExist.length === 0) {
        subjectRegistedList.push(subjectList[index])
        // Thêm vào giao diện giỏ hàng

        var add = document.createElement("div")
        var cartItem = document.querySelectorAll(".tbody .table-body")
        for (var i = 0; i < cartItem.length; i++) {
            var productT = document.querySelectorAll(".title")
            if (productT[i].innerHTML == subjectList[index].name) {
                document.querySelector("input").value
            }
        }
        var divcontent = '<div class="table-body"><div style="display: flex; text-align: center;"><img width="70px" src="' + subjectList[index].img + '" alt=""><span  style="font-size: 14px; margin-left: 10px" class="margin-auto title">' + subjectList[index].name + '</span></div><div class="margin-auto" ><p>' + subjectList[index].price_course * subjectList[index].course + `</p></div><div class="margin-auto"></div><div class="margin-auto dele" onclick="removeCart('${subjectList[index].id}')">xóa</div></div>`
        add.innerHTML = divcontent
        add.classList.add(`cart-index-${subjectList[index].id}`)
        var cartTable = document.querySelector(".tbody")
        cartTable.append(add)

        // Tính tiền giỏ hàng
        updateTotalPrice()

        // Thay đổi hiển thị số lượng đã đăng kí
        var highlightElem = document.querySelector(".shop-icon span")
        highlightElem.innerText = subjectRegistedList.length;
    }
    else alert("Bạn đã đăng kí môn học này rồi")
}

// update tổng tiền giỏ hàng//
function updateTotalPrice() {
    var totalPriceElem = document.querySelector(".total span")
    var totalPrice = 0;
    subjectRegistedList.map(sub => {
        totalPrice += sub.price_course * sub.course;
    })
    totalPriceElem.innerText = totalPrice;
}

// xóa môn học //
function removeCart(id) {
    const deleteItem = document.querySelector(`.cart-index-${id}`)
    deleteItem.remove()
    var newList = subjectRegistedList.filter(sub => {
        return sub.id != id
    })
    subjectRegistedList = newList;

    var jsonString = JSON.stringify(subjectRegistedList);
    localStorage.setItem("DKMH_LOCALSTORAGE", jsonString);



    updateTotalPrice()
    var highlightElem = document.querySelector(".shop-icon span")
    highlightElem.innerText = subjectRegistedList.length;
}

// sử lý chấp nhận đk môn //
function accessRegister() {
    var jsonString = JSON.stringify(subjectRegistedList);
    localStorage.setItem("DKMH_LOCALSTORAGE", jsonString);
    alert("Đăng kí môn học thành công :>")
}


window.onload = () => {
    const subjectListElem = document.querySelector(".subject-list")
    var subjectListInner = "";

// tải dữ liệu các môn học lên web//
    function loadSubject() {
        subjectList.map((sub, index) => {
            subjectListInner += `
                <div class="item">
                    <div>
                        <div class="top">
                            <div class="img">
                                <img src=${sub.img} alt="monhoc">
                            </div>
                            <button id="btn" class="buy" onclick="addCart(${index})">Đăng ký</button>
                        </div>
                        <div class="bot">
                            <h1 id="name" title="Môn đo lường cảm biến" class="body-item-h1" >${sub.name}</h1>
                            <p  id="price" class="body-item-p"><span>${sub.price_course * sub.course}</span><sup>₫</sup></p>
                        </div>
                    </div>
                </div>
            `
        })
        subjectListElem.innerHTML = subjectListInner;
    }





// thêm đóng mở giỏ hàng//
    const cartClose = document.querySelector(".ti-close")
    const cartShow = document.querySelector(".shop-icon i")

    cartShow.addEventListener("click", function () {
        document.querySelector(".cart").style.right = "0"
    })
    cartClose.addEventListener("click", function () {
        document.querySelector(".cart").style.right = "-100%"
    })
    loadSubject();



}