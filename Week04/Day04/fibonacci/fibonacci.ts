'use strict'

 export  function fibonacci(input: any): number {
  try {
    if (typeof(input) !== 'number') {
      throw new Error('Please provide a number type of variable')
    }
  } catch (error) {
    throw error.message
  }
  try {
    if (input < 0) {
      throw new Error('Please provide a positive number')
    }
  } catch (error) {
    throw error.message
  }
  if (input === 0) {
    return 0;
  } else if (input === 1) {
    return 1
  } else if (input > 1) {
    return fibonacci(input - 2) + fibonacci(input - 1)
  }
}
