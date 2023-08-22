var subjects = [
    
]

var stringLocal = localStorage.getItem("DKMH_LOCALSTORAGE");
subjects = JSON.parse(stringLocal);
console.log()

var timeLine = [
    {
        id: "mon1",
        time: 1,
        date: 1
    },
    {
        id: "mon2",
        time: 2,
        date: 1
    },
    {
        id: "mon3",
        time: 3,
        date: 1
    },
    {
        id: "tue1",
        time: 1,
        date: 2
    },
    {
        id: "tue2",
        time: 2,
        date: 2
    },
    {
        id: "tue3",
        time: 3,
        date: 2
    },
    {
        id: "wed1",
        time: 1,
        date: 3
    },
    {
        id: "wed2",
        time: 2,
        date: 3
    },
    {
        id: "wed3",
        time: 3,
        date: 3
    },
    {
        id: "thur1",
        time: 1,
        date: 4
    },
    {
        id: "thur2",
        time: 2,
        date: 4
    },
    {
        id: "thur3",
        time: 3,
        date: 4
    },
    {
        id: "fri1",
        time: 1,
        date: 5
    },
    {
        id: "fri2",
        time: 2,
        date: 5
    },
    {
        id: "fri3",
        time: 3,
        date: 5
    },
    {
        id: "sat1",
        time: 1,
        date: 6
    },
    {
        id: "sat2",
        time: 2,
        date: 6
    },
    {
        id: "sat3",
        time: 3,
        date: 6
    },
]



// tạo mảng 2 chiều
// a b c d
// e f g h
// ...
var as2D = new Array(); 

as2D[0] = new Array("Time/Date", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat");
as2D[1] = new Array("Ca 1:", "Trống", "Trống", "Trống", "Trống", "Trống", "Trống");
as2D[2] = new Array("Ca 2:", "Trống", "Trống", "Trống", "Trống", "Trống", "Trống");
as2D[3] = new Array("Ca 3:", "Trống", "Trống", "Trống", "Trống", "Trống", "Trống");



window.onload = (event) => {
    // ------------------------------------ FUNCTIONAL ------------------------------------------

// hàm tạo thời khóa biểu //
    function createTimeTable() {
        var timeTable = "<table>";
        for (var y = 0; y < as2D.length; y++) {
            timeTable += "<tr>";
            for (var x = 0; x < as2D[y].length; x++) {
                timeTable += `<td class="column-${y}-${x}">` + as2D[y][x] + "</td>";
            }
            timeTable += "</tr>";
        }
        timeTable += "</table>";
        return timeTable;
    }
// sử lý thêm môn học vào thời khóa biểu//
    function handleTimeTable() {
        subjects.map(subject => {
            subject.timeLine.map(time => {
                var searchIndexTimeLine = timeLine.findIndex((timeInTimeLine) => {
                    return timeInTimeLine.id === time
                });
                hanldeSubject(subject, searchIndexTimeLine)
            })
        })
    }


// Sử lý môn học thêm vào bảng table//

    function hanldeSubject(subject, indexTimeLine) {
        for (var y = 0; y < as2D.length; y++) {
            for (var x = 0; x < as2D[y].length; x++) {
                subjectBoxHighLight = as2D[y][x] 
                if(y == timeLine[indexTimeLine].time && x == timeLine[indexTimeLine].date) {
                    var boxApply = document.querySelector(`.column-${y}-${x}`)
                    boxApply.innerText = subject.name
                }
            }

        }
    }
    const timeTableElem = document.querySelector("#time-table")
    timeTableElem.innerHTML = createTimeTable();
    handleTimeTable();




}