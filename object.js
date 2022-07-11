let a = {
    name: 'it',
    protocol1: 'https',
    maxStudentsCount: 10,
    isOnline: true,
    student: ['ivan', 'andrey', 'farid'],
    classroom: {
        teatcher: {
            name: 'wew',
            age: 18,
        }
    }
}

let b = {...a}
b.student = {...a.student}
b.classroom = {...a.classroom}
b.classroom.teatcher = {...a.classroom.teatcher}



let state = {
    name: 'it',
    age: 1,
    school: {
        students: [{}, {}, {}],
        address: 'MSK',
        director: {
            name: 'Andrey'
        }
    }
}

let b = {
    ...state,
    school: {
        ...state.school,
        students: state.school.students.map(el => ({...el})),
        director: {...state.school.director}
    }
}

let a1 = [1, 2, 3, 4, 5]
let b1 = [...a1]
