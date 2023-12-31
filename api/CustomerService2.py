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
    output = ""
   

    def __init__(self, package):
        self.output = package

    def toJSON(self):
        jsonValue = {
            "id": self.id,
            "output": self.output,
         
        }
        return json.loads(json.dumps(jsonValue))


@app.route('/binary-bomber-service/customer2', methods=['GET', 'POST'])
def handleCustomer():
    if request.method == 'GET':
        package = request.args.get('package')
        df = readCSV()
        index = findCustomerByPackages(df, package)
        print(index)
        customer = Customer(package)
        response = ESResponse(0, None, "")
        if (index != -1):
            customer.id = str(df["id"].get(index))
            customer.output = str(df["output"].get(index))
            response = ESResponse(1, customer.toJSON(), "Package Found")
        else:
            response = ESResponse(-1, None, "Incorrect package ID")
        return response.toJSON()


def readCSV():
    return pd.read_csv('set.csv')


def findCustomerByPackages(df, package):
    index = -1
    outputList = list(df["output"].tolist())
    for i in range(len(outputList)):
        if (str(outputList[i]).strip() == package):
            index = i
            break
    return index


if __name__ == '__main__':
    app.run(host="localhost", port=9901) 





















# from flask import Flask, request

# app = Flask(__name__)
# import json
# import pandas as pd


# class ESResponse:
#     status = 0
#     data = False
#     message = ""

#     def __init__(self, status, data, message):
#         self.status = status
#         self.data = data
#         self.message = message

#     def toJSON(self):
#         jsonValue = {
#             "status": self.status,
#             "data": self.data,
#             "message": self.message
#         }
#         return json.loads(json.dumps(jsonValue))


# class Customer:
#     id = ""
#     package = ""
#     product_desc = ""
#     deducted_amt = ""
#     event_time_stamp = ""
#     connection_age = ""
#     gender = ""
#     age = ""
#     dateval = ""

#     def __init__(self, packages):
#         self.package = packages

#     def toJSON(self):
#         jsonValue = {
#             "id": self.id,
#             "package": self.package,
#             "product_desc": self.product_desc,
#             "deducted_amt": self.deducted_amt,
#             "event_time_stamp": self.event_time_stamp,
#             "connection_age": self.connection_age,
#             "gender": self.gender,
#             "age": self.age,
#             "dateval": self.dateval,
#         }
#         return json.loads(json.dumps(jsonValue))


# @app.route('/binary-bomber-service/customer2', methods=['GET', 'POST'])
# def handleCustomer():
#     if request.method == 'GET':
#         packages = request.args.get('packages')
#         df = readCSV()
#         index = findCustomerByPackage(df, packages)
#         print(index)
#         customer = Customer(packages)
#         response = ESResponse(0, None, "")
#         if (index != -1):
#             customer.id = str(df["id"].get(index))
#             customer.product_desc = str(df["product_desc"].get(index))
#             customer.deducted_amt = str(df["deducted_amt"].get(index))
#             customer.event_time_stamp = str(df["event_time_stamp"].get(index))
#             customer.connection_age = str(df["connection_age"].get(index))
#             customer.gender = str(df["gender"].get(index))
#             customer.age = str(df["age"].get(index))
#             customer.dateval = str(df["dateval"].get(index))
#             response = ESResponse(1, customer.toJSON(), "Customer Found")
#         else:
#             response = ESResponse(-1, None, "Customer not Found")
#         return response.toJSON()


# def readCSV():
#     return pd.read_csv('SampleData-Mobitel.csv')


# def findCustomerByPackage(df, packages):
#     index = -1
#     packageList = list(df["package"].tolist())
#     for i in range(len(packageList)):
#         if (str(packageList[i]).strip() == packages):
#             index = i
#             break
#     return index


# if __name__ == '__main__':
#     app.run(host="localhost", port=9901)  