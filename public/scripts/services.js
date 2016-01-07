
app.service("expenseService", function ($http, $q) {

        return ({
            addExpense: addExpense,
            getAllExpense: getAllExpense
        });


        function addExpense(expense) {
            var request = $http({
                method: "POST",
                url: "/api/expense/Add",
                data:
                    {

                        Date: expense.Date,
                        Description: expense.Description,
                        Category: {
                            Name: expense.Category.Name
                        },
                        Amount: expense.Amount
                    }
            });
            return (request.then(handleSuccess, handleError));
        }

        function getAllExpense() {
            var request = $http({
                method: "GET",
                url: "/api/expenses"
            });
            return (request.then(handleSuccess, handleError));
        }

        function handleError(response) {

            if (
                !angular.isObject(response.data) ||
                !response.data.message
                ) {
                return ($q.reject("error occurred."));
            }

            return ($q.reject(response.data.message));
        }

        function handleSuccess(response) {
            return (response.data);
        }
    }
);
