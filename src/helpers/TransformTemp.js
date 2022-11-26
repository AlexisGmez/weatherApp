export const convert =(kelvin)=>{
    const celsius = (kelvin - 273.15).toFixed(0);
    const fahrenheigt = ((celsius * 9/5) + 32).toFixed(0);

    return {celsius,fahrenheigt};
}