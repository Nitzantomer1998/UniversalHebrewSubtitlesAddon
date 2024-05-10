import db from "../configs/dbConfig.js";
import addonInstallsQuery from "../queries/addonInstallsQuery.js";
import downloadedContentQuery from "../queries/downloadedContentQuery.js";
import watchedContentQuery from "../queries/watchedContentQuery.js";
import dbValidation from "../validations/dbValidation.js";


const insertAddonInstall = async () => { db.query(addonInstallsQuery.insertInstall); };
const insertDownloadedContent = async (imdbID, season, episode) => { if (dbValidation.downloadedContent(imdbID, season, episode)) db.query(downloadedContentQuery.insertDownload, [imdbID, season, episode]); };
const insertWatchedContent = async (contentType, imdbID, season, episode) => { if (dbValidation.watchedContent(contentType, imdbID, season, episode)) db.query(watchedContentQuery.insertWatch, [imdbID, season, episode]); };

const dbService = {
    insertAddonInstall,
    insertDownloadedContent,
    insertWatchedContent,
};


export default dbService;