"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHotelById = getHotelById;
exports.saveOrUpdateHotel = saveOrUpdateHotel;
exports.getAllHotels = getAllHotels;
const promises_1 = __importDefault(require("fs/promises"));
const path_1 = __importDefault(require("path"));
// Define the directory where hotel data is stored
const hotelsDirectory = path_1.default.resolve(__dirname, '../data/hotels');
// Type guard to check for NodeJS.ErrnoException
function isNodeError(error) {
    return error instanceof Error && 'code' in error;
}
// Reads a hotel file and returns the Hotel object
function readHotelFile(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const filePath = path_1.default.join(hotelsDirectory, `${id}.json`);
        const data = yield promises_1.default.readFile(filePath, 'utf8');
        return JSON.parse(data);
    });
}
// Writes or updates a hotel file with new data
function writeHotelFile(hotel) {
    return __awaiter(this, void 0, void 0, function* () {
        const filePath = path_1.default.join(hotelsDirectory, `${hotel.id}.json`);
        yield promises_1.default.writeFile(filePath, JSON.stringify(hotel, null, 2), 'utf8');
    });
}
// Gets a single hotel by ID, returns null if the file does not exist
function getHotelById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            return yield readHotelFile(id);
        }
        catch (error) {
            if (isNodeError(error) && error.code === 'ENOENT') {
                return null; // File does not exist
            }
            throw error; // Rethrow any other type of error
        }
    });
}
// Saves a new hotel or updates an existing one
function saveOrUpdateHotel(hotel) {
    return __awaiter(this, void 0, void 0, function* () {
        yield writeHotelFile(hotel);
    });
}
// Retrieves all hotels from the directory
function getAllHotels() {
    return __awaiter(this, void 0, void 0, function* () {
        const files = yield promises_1.default.readdir(hotelsDirectory);
        return Promise.all(files.map(file => readHotelFile(file.replace('.json', ''))));
    });
}
//# sourceMappingURL=dataHandler.js.map