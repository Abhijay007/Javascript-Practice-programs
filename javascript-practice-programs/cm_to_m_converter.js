function cm_to_m(value) {
    let convert = 100
    return value / convert
}

// Inverse
function m_to_cm(value) {
    let convert = 100
    return value * convert
}

console.log("M to CM : " + m_to_cm(1))
console.log("CM to M : " + cm_to_m(100))