from flask import Flask, request

app = Flask(__name__)
import json
import pandas as pd


class ESResponse:
    status = 0
    data = False
    message = ""

    def __init__(self, status, data, message):
        self.status = status
        self.data = data
        self.message = message

    def toJSON(self):
        jsonValue = {
            "status": self.status,
            "data": self.data,
            "message": self.message
        }
        return json.loads(json.dumps(jsonValue))


class Customer:
    id = ""
    package = ""
    product_desc = ""
    deducted_amt = ""
    event_time_stamp = ""
    connection_age = ""
    gender = ""
    age = ""
    dateval = ""

    def __init__(self, customerId):
        self.id = customerId

    def toJSON(self):
        jsonValue = {
            "id": self.id,
            "package": self.package,
            # "product_desc": self.product_desc,
            # "deducted_amt": self.deducted_amt,
            # "event_time_stamp": self.event_time_stamp,
            # "connection_age": self.connection_age,
            # "gender": self.gender,
            # "age": self.age,
            # "dateval": self.dateval,
        }
        return json.loads(json.dumps(jsonValue))


@app.route('/binary-bomber-service/customer', methods=['GET', 'POST'])
def handleCustomer():
    if request.method == 'GET':
        customerId = request.args.get('customerId')
        df = readCSV()
        index = findCustomerById(df, customerId)
        print(index)
        customer = Customer(customerId)
        response = ESResponse(0, None, "")
        if (index != -1):
            customer.package = str(df["output"].get(index))
           
            response = ESResponse(1, customer.toJSON(), "Customer Found")
        else:
            response = ESResponse(-1, None, "Incorrect Customer ID")
        return response.toJSON()


def readCSV():
    return pd.read_csv('groupedCSV.csv')


def findCustomerById(df, customerId):
    index = -1
    idList = list(df["id"].tolist())
    for i in range(len(idList)):
        if (str(idList[i]).strip() == customerId):
            index = i
            break
    return index


if __name__ == '__main__':
    app.run(host="localhost", port=9900)  
