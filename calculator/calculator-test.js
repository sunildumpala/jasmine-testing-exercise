
it('should calculate the monthly rate correctly', function () {
  // ...
  let values= {
    amount: 1000,
    rate: 6,
    years: 10
  };
  //values.amount = 1000;
  //values.rate = 6;
  //values.years = 10;
  expect(calculateMonthlyPayment(values)).toEqual("11.10");
});


it("should return a result with 2 decimal places", function() {
  // ..
  let values= {
    amount: 1000,
    rate: 6,
    years: 10
  };
  //values.amount = 1000;
  //values.rate = 6;
  //values.years = 10;
  expect(calculateMonthlyPayment(values)).toEqual("11.10");
});

/// etc
