declare namespace CalculatorLibrary {
    type Operators = "+" | "-" | "*" | "/"; // Define the available operators for calculations
    
    interface ICalcResult {
        result: number;
        message?: string;
    }
    
    /**
     * Perform a calculation with given numbers and operator.
     */
    function calculate(num1: number, num2: number, op: Operators): ICalcResult;
}