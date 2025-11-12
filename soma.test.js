function soma(a, b){
    return a+b
}

test("Deve somar dois números", ()=>{
    expect(soma(1,2)).toBe(3)
})