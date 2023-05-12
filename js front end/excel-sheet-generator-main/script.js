"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const XLSX = __importStar(require("xlsx"));
let table = document.getElementsByClassName("sheet-body")[0], rows = document.getElementsByClassName("rows")[0], columns = document.getElementsByClassName("columns")[0], tableExists = false;
const generateTable = () => {
    let rowsNumber = parseInt(rows.value), columnsNumber = parseInt(columns.value);
    table.innerHTML = "";
    for (let i = 0; i < rowsNumber; i++) {
        var tableRow = "";
        for (let j = 0; j < columnsNumber; j++) {
            tableRow += `<td contenteditable></td>`;
        }
        table.innerHTML += tableRow;
    }
    if (rowsNumber > 0 && columnsNumber > 0) {
        tableExists = true;
    }
};
const ExportToExcel = (type, fn, dl) => {
    if (!tableExists) {
        return;
    }
    var elt = table;
    var wb = XLSX.utils.table_to_book(elt, { sheet: "sheet1" });
    return dl
        ? XLSX.write(wb, { bookType: type, bookSST: true, type: "base64" })
        : XLSX.writeFile(wb, fn || "MyNewSheet." + (type || "xlsx"));
};
