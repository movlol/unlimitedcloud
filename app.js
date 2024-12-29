let ffmpeg;
let starttime;

let prefix = "skibidi"

function changeTheme() {
    const theme = document.getElementById('theme-switcher').checked;
    let t = "light"
    if (theme) {
        t = "dark"
    }
    document.body.className = t + '-theme';
    localStorage.setItem('selectedTheme', t); // Save theme to local storage
  }


  function initsettings() {
    const savedTheme = localStorage.getItem('selectedTheme') || 'light'; // Default to light theme
    document.body.className = savedTheme + '-theme';

    if (savedTheme == "dark") {
        document.getElementById('theme-switcher').checked = true
    }
    document.getElementById('bin-switcher').checked = (localStorage.getItem('BinVis') == "true")

    if (localStorage.getItem("profile")) {
        if (localStorage.getItem("profile").length > 1) {
            cleardirs(true)
            localStorage.setItem("profile", "")
            document.getElementById("profile-selector").value = "";
        } else {
            document.getElementById("profile-selector").value = localStorage.getItem("profile");
        }
        
      }


  }
  initsettings()


  function changeBinVis() {
    const theme = document.getElementById('bin-switcher').checked;
    localStorage.setItem('BinVis', theme); // Save theme to local storage
  }

var MD5 = function(d) {
    var r = M(V(Y(X(d), 8 * d.length)));
    return r.toLowerCase()
  };
  
  function M(d) {
    for (var _, m = "0123456789ABCDEF", f = "", r = 0; r < d.length; r++) _ = d.charCodeAt(r), f += m.charAt(_ >>> 4 & 15) + m.charAt(15 & _);
    return f
  }
  
  function X(d) {
    for (var _ = Array(d.length >> 2), m = 0; m < _.length; m++) _[m] = 0;
    for (m = 0; m < 8 * d.length; m += 8) _[m >> 5] |= (255 & d.charCodeAt(m / 8)) << m % 32;
    return _
  }
  
  function V(d) {
    for (var _ = "", m = 0; m < 32 * d.length; m += 8) _ += String.fromCharCode(d[m >> 5] >>> m % 32 & 255);
    return _
  }
  
  function Y(d, _) {
    d[_ >> 5] |= 128 << _ % 32, d[14 + (_ + 64 >>> 9 << 4)] = _;
    for (var m = 1732584193, f = -271733879, r = -1732584194, i = 271733878, n = 0; n < d.length; n += 16) {
        var h = m,
            t = f,
            g = r,
            e = i;
        f = md5_ii(f = md5_ii(f = md5_ii(f = md5_ii(f = md5_hh(f = md5_hh(f = md5_hh(f = md5_hh(f = md5_gg(f = md5_gg(f = md5_gg(f = md5_gg(f = md5_ff(f = md5_ff(f = md5_ff(f = md5_ff(f, r = md5_ff(r, i = md5_ff(i, m = md5_ff(m, f, r, i, d[n + 0], 7, -680876936), f, r, d[n + 1], 12, -389564586), m, f, d[n + 2], 17, 606105819), i, m, d[n + 3], 22, -1044525330), r = md5_ff(r, i = md5_ff(i, m = md5_ff(m, f, r, i, d[n + 4], 7, -176418897), f, r, d[n + 5], 12, 1200080426), m, f, d[n + 6], 17, -1473231341), i, m, d[n + 7], 22, -45705983), r = md5_ff(r, i = md5_ff(i, m = md5_ff(m, f, r, i, d[n + 8], 7, 1770035416), f, r, d[n + 9], 12, -1958414417), m, f, d[n + 10], 17, -42063), i, m, d[n + 11], 22, -1990404162), r = md5_ff(r, i = md5_ff(i, m = md5_ff(m, f, r, i, d[n + 12], 7, 1804603682), f, r, d[n + 13], 12, -40341101), m, f, d[n + 14], 17, -1502002290), i, m, d[n + 15], 22, 1236535329), r = md5_gg(r, i = md5_gg(i, m = md5_gg(m, f, r, i, d[n + 1], 5, -165796510), f, r, d[n + 6], 9, -1069501632), m, f, d[n + 11], 14, 643717713), i, m, d[n + 0], 20, -373897302), r = md5_gg(r, i = md5_gg(i, m = md5_gg(m, f, r, i, d[n + 5], 5, -701558691), f, r, d[n + 10], 9, 38016083), m, f, d[n + 15], 14, -660478335), i, m, d[n + 4], 20, -405537848), r = md5_gg(r, i = md5_gg(i, m = md5_gg(m, f, r, i, d[n + 9], 5, 568446438), f, r, d[n + 14], 9, -1019803690), m, f, d[n + 3], 14, -187363961), i, m, d[n + 8], 20, 1163531501), r = md5_gg(r, i = md5_gg(i, m = md5_gg(m, f, r, i, d[n + 13], 5, -1444681467), f, r, d[n + 2], 9, -51403784), m, f, d[n + 7], 14, 1735328473), i, m, d[n + 12], 20, -1926607734), r = md5_hh(r, i = md5_hh(i, m = md5_hh(m, f, r, i, d[n + 5], 4, -378558), f, r, d[n + 8], 11, -2022574463), m, f, d[n + 11], 16, 1839030562), i, m, d[n + 14], 23, -35309556), r = md5_hh(r, i = md5_hh(i, m = md5_hh(m, f, r, i, d[n + 1], 4, -1530992060), f, r, d[n + 4], 11, 1272893353), m, f, d[n + 7], 16, -155497632), i, m, d[n + 10], 23, -1094730640), r = md5_hh(r, i = md5_hh(i, m = md5_hh(m, f, r, i, d[n + 13], 4, 681279174), f, r, d[n + 0], 11, -358537222), m, f, d[n + 3], 16, -722521979), i, m, d[n + 6], 23, 76029189), r = md5_hh(r, i = md5_hh(i, m = md5_hh(m, f, r, i, d[n + 9], 4, -640364487), f, r, d[n + 12], 11, -421815835), m, f, d[n + 15], 16, 530742520), i, m, d[n + 2], 23, -995338651), r = md5_ii(r, i = md5_ii(i, m = md5_ii(m, f, r, i, d[n + 0], 6, -198630844), f, r, d[n + 7], 10, 1126891415), m, f, d[n + 14], 15, -1416354905), i, m, d[n + 5], 21, -57434055), r = md5_ii(r, i = md5_ii(i, m = md5_ii(m, f, r, i, d[n + 12], 6, 1700485571), f, r, d[n + 3], 10, -1894986606), m, f, d[n + 10], 15, -1051523), i, m, d[n + 1], 21, -2054922799), r = md5_ii(r, i = md5_ii(i, m = md5_ii(m, f, r, i, d[n + 8], 6, 1873313359), f, r, d[n + 15], 10, -30611744), m, f, d[n + 6], 15, -1560198380), i, m, d[n + 13], 21, 1309151649), r = md5_ii(r, i = md5_ii(i, m = md5_ii(m, f, r, i, d[n + 4], 6, -145523070), f, r, d[n + 11], 10, -1120210379), m, f, d[n + 2], 15, 718787259), i, m, d[n + 9], 21, -343485551), m = safe_add(m, h), f = safe_add(f, t), r = safe_add(r, g), i = safe_add(i, e)
    }
    return Array(m, f, r, i)
  }
  
  function md5_cmn(d, _, m, f, r, i) {
    return safe_add(bit_rol(safe_add(safe_add(_, d), safe_add(f, i)), r), m)
  }
  
  function md5_ff(d, _, m, f, r, i, n) {
    return md5_cmn(_ & m | ~_ & f, d, _, r, i, n)
  }
  
  function md5_gg(d, _, m, f, r, i, n) {
    return md5_cmn(_ & f | m & ~f, d, _, r, i, n)
  }
  
  function md5_hh(d, _, m, f, r, i, n) {
    return md5_cmn(_ ^ m ^ f, d, _, r, i, n)
  }
  
  function md5_ii(d, _, m, f, r, i, n) {
    return md5_cmn(m ^ (_ | ~f), d, _, r, i, n)
  }
  
  function safe_add(d, _) {
    var m = (65535 & d) + (65535 & _);
    return (d >> 16) + (_ >> 16) + (m >> 16) << 16 | 65535 & m
  }
  
  function bit_rol(d, _) {
    return d << _ | d >>> 32 - _
  }


const supportedImageExtensions = [
    'jpg', 'jpeg', 'png', 'bmp', 'gif', 'tiff', 'webp'
];

const supportedVideoExtensions = [
    'mp4', 'mkv', 'mov', 'avi', 'flv', 'wmv', 'webm', 'mpeg', '3gp', 'ogg'
];

const supportedAudioExtensions = [
    'mp3', 'wav', 'flac', 'aac', 'ogg', 'm4a', 'wma', 'alac', 'aiff'
];

function isSupportedByFFmpeg(ext) {
    if (supportedImageExtensions.includes(ext)) {
        return 'image';
    }
    if (supportedVideoExtensions.includes(ext)) {
        return 'video';
    }
    if (supportedAudioExtensions.includes(ext)) {
        return 'audio';
    }
    return null;
}

function getlogin() {
  let f = getcurrentpasskey();


  const blob = new Blob([f], {
      type: 'text/plain'
  });

  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = 'Unlimited Cloud Storage Passkey.txt';

  link.click();
}

async function handleSignup() {
  const key = document.getElementById('ai').value;
  const user = document.getElementById('ui').value;

  localStorage.setItem("apikey", key)
  localStorage.setItem("id", user)
  reload()
}

function logout() {
  if (confirm("Are you sure you wanna reset your login")) {
      localStorage.clear();
      reload()
  }

}

function formatTime(seconds) {
    const days = Math.floor(seconds / (24 * 3600));
    const hours = Math.floor((seconds % (24 * 3600)) / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = Math.floor(seconds % 60);

    // Build the formatted string
    let result = [];
    if (days > 0) result.push(`${days} days`);
    if (hours > 0) result.push(`${hours} hours`);
    if (minutes > 0) result.push(`${minutes} minutes`);
    if (secs > 0 || result.length === 0) result.push(`${secs} seconds`); // Always show seconds if no other unit

    return result.join(", ") + " remaining";
}

function generatekey() {
    const array = new Uint8Array(32);
    window.crypto.getRandomValues(array);
    const key = Array.from(array).map(byte => byte.toString(16).padStart(2, '0')).join('');
    document.getElementById("ek").value = key
  }

    function back() {
    document.getElementById("start").style.display = ""
    document.getElementById("newaccount").style.display = "none"
    document.getElementById("enterpass").style.display = "none"
  }

  function makekey() {
    generatekey()
    document.getElementById("start").style.display = "none"
    document.getElementById("newaccount").style.display = ""

  }

  function loginkeyHTML() {
    document.getElementById("start").style.display = "none"
    document.getElementById("enterpass").style.display = ""

  }

  function generatepasskey() {
    const k = btoa(document.getElementById("ai").value + ";" + document.getElementById("ui").value + ";" + document.getElementById("ek").value)
    loginwithkey(k)
  }

  function getcurrentpasskey() {
    return btoa(localStorage.getItem("apikey") + ";" + localStorage.getItem("id") + ";" + localStorage.getItem("enc"))
  }

  function loginwithkey(passkey) {
    const a = atob(passkey).split(";")
    localStorage.setItem("apikey", a[0])
    localStorage.setItem("id", a[1])
    localStorage.setItem("enc", a[2])
    reload()
  }

  function loginfrombut() {
    loginwithkey(document.getElementById("passkeee").value)
  }

function generateUUID() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      const r = Math.random() * 16 | 0;
      const v = (c === 'x') ? r : (r & 0x3 | 0x8);
      return v.toString(16);
  });
}

function removeQueryParameters() {
  var newUrl = window.location.origin + window.location.pathname;
  history.replaceState({}, document.title, newUrl);
}

removeQueryParameters();


var dValue = "root"
var dValueLook = "root"

var emoji = {
    "txt": "📄",
    "doc": "📃",
    "docx": "📑",
    "pdf": "📰",
    "ppt": "📊",
    "pptx": "📈",
    "xls": "📉",
    "xlsx": "📊",
    "csv": "📊",
    "jpg": "🖼️",
    "png": "🖼️",
    "webp": "🖼️",
    "gif": "🖼️",
    "mp3": "🎵",
    "wav": "🎵",
    "flac": "🎵",
    "ogg": "🎵",
    "mp4": "🎥",
    "mov": "🎥",
    "avi": "🎥",
    "ts": "🎥",
    "mpeg": "🎥",
    "webm": "🎥",
    "mkv": "🎥",
    "zip": "📦",
    "rar": "📦",
    "7z": "📦",
    "xz": "📦",
    "lzma": "📦",
    "tar": "🗃️",
    "gz": "🗃️",
    "bz2": "🗃️",
    "iso": "💿",
    "dmg": "💿",
    "qcow2": "💿",
    "exe": "💻",
    "html": "🌐",
    "css": "🎨",
    "js": "📜",
    "json": "📄",
    "xml": "🧾",
    "yaml": "🧾",
    "yml": "🧾",
    "ts": "📜",
    "tsx": "📜",
    "scss": "🎨",
    "sass": "🎨",
    "less": "🎨",
    "go": "🐹",
    "rs": "🦀",
    "asm": "💻",
    "vue": "🌄",
    "jsx": "📜",
    "cpp": "💻",
    "java": "☕",
    "py": "🐍",
    "rb": "💎",
    "php": "🐘",
    "md": "📝",
    "key": "🔑",
    "sql": "🗃️",
    "bak": "🗑️",
    "conf": "⚙️",
    "log": "📋",
    "cfg": "⚙️",
    "dll": "🔌",
    "jar": "🍶",
    "ttf": "🔤",
    "otf": "🔤",
    "woff": "🔤",
    "woff2": "🔤",
    "eot": "🔤",
    "psd": "🎨",
    "svg": "🎨",
    "tmp": "❄️",
    "backup": "🗄️",
    "bat": "🦇",
    "sh": "🐚",
    "h": "💻",
    "hpp": "💻",
    "class": "📦",
    "obj": "🧱",
    "swift": "🐦",
    "kt": "🐱",
    "cs": "💻",
    "vb": "💻",
    "rtf": "📄",
    "ps1": "📜",
    "patch": "🩹",
    "cxx": "💻",
    "hxx": "💻",
    "war": "⚔️",
    "ear": "👂",
    "pyc": "🐍",
    "pyo": "🐍",
    "whl": "🔧",
    "swp": "🔄",
    "csproj": "📦",
    "suo": "🔒",
    "pdb": "🔒",
    "dsp": "🔊",
    "vbp": "🔌",
    "vbw": "🔌",
    "mak": "🛠️",
    "ini": "⚙️",
    "asd": "🗑️",
    "torrent": "🌊",
    "vmx": "🖥️",
    "vmdk": "💽",
    "vagrant": "🧙",
    "img": "🖼️",
    "bin": "🗑️",
    "cue": "🎮",
    "ova": "🥚",
    "db": "🗃️",
    "sqlite": "🗃️",
    "mdb": "🗃️",
    "apk": "📱",
    "nfo": "💾",
    "yaml": "🧾",
    "plist": "⚙️",
    "reg": "🗃️",
    "crt": "🔒",
    "pem": "🔒",
    "key": "🔑",
    "ics": "📅",
    "msg": "✉️",
    "eml": "✉️"
}  



var moddingfiles = false


window.addEventListener("beforeunload", function(event) {
  if (moddingfiles) {
      event.returnValue = "You are still uploading";
  }
});



function createpath() {

    var segments = dValueLook.split('/');
    var segments2 = dValue.split('/');
    
    var linksHTML = segments.map(function(segment, index) {
        // Add the corresponding value from segments2 as a custom attribute
        return `<a class="breadcrumb-link" data-value="${encodeURIComponent(segments2[index])}">
                    ${decodeURIComponent(segment)}
                </a>`;
    });
    

  var dirDiv = document.getElementById('dir');
  dirDiv.innerHTML = linksHTML.join(' / ');

  var breadcrumbLinks = document.querySelectorAll('.breadcrumb-link');
  breadcrumbLinks.forEach(function(link) {
      link.addEventListener('click', function() {
          var clickedSegment = this.textContent;
          var clickedIndex = Array.from(breadcrumbLinks).indexOf(this);

          dValue = segments2.slice(0, clickedIndex + 1).join('/');
          dValueLook = segments.slice(0, clickedIndex + 1).join('/');

          loaduploads();
          createpath();
      });


    link.addEventListener("dragenter", async function(event) {
        event.preventDefault();
        link.classList.add("dragingonbread")
        window.dragtofolder = link.getAttribute("data-value")
        console.log(window.dragtofolder)
        window.dragtofolname = link.textContent.trim()
      })

      link.addEventListener("dragleave", async function(event) {
        const s = window.dragtofolder
        link.classList.remove("dragingonbread")
        await delay(1000)
        if (s == window.dragtofolder) {
            window.dragtofolder = null
        }
      })
  });

}



const fileInput = document.getElementById('file-input');
fileInput.addEventListener('change', handleFileSelection);

const folderinput = document.getElementById('folder-input');
folderinput.addEventListener('change', handleFolderSelection);




function uploadFile() {
  fileInput.click();
}

function uploadFolder() {
    folderinput.click();
  }

async function createFolder() {
    if (moddingfiles) {
        return alert("Another process is running. please wait");
    }


    moddingfiles = true

    const dvvv = dValue;
  const folderName = prompt("Folder Name:");

  if (folderName) {
      let uploadsObject = await getasync("u", dvvv.split("/").pop())
      if (!uploadsObject) {
          uploadsObject = {}
      } else {
          uploadsObject = JSON.parse(uploadsObject)
      }

      uploadsObject[folderName] = [generateUUID(), "folder"]

      await setasync("u", dvvv.split("/").pop(), JSON.stringify(uploadsObject))
      moddingfiles = false
      loaduploads()

  } else {}
}


function generateFileKey() { //key no-one could guess
  var key = "";
  while (key.length < 100) {
      var part = (Math.random() * 46656) | 0;
      part = ("000" + part.toString(36)).slice(-3);
      key += part;
  }
  return key.slice(0, 100);
}


const bytesPerMinute = 10 * 1024 * 1024; // 10 MB in bytes
const base64OverheadFactor = 4 / 3; // Base64 increases size by 4/3
const effectiveBytesPerMinute = bytesPerMinute / base64OverheadFactor; // Adjust for Base64
const bytesPerSecond = effectiveBytesPerMinute / 60; // Convert to bytes per second
const BYTESPERDOWNLOAD = bytesPerSecond*2


async function setfile(file, number, max, dvvv, thumbnailchunkid, allfilessize, bytesuploadedallfiles, filenameV) {
    return new Promise((resolve, reject) => {
        const uploadProgressBar = document.getElementById("upload-progress");
        const uploadProgressText = document.getElementById("upload-text");
        const upt2 = document.getElementById("upload-text2");
  
        const filename = file.name;
  
        const chunksstorageid = generateUUID();
  
        const chunkSize = 0.5 * 1024 * 1024;  // 0.5 MB per chunk
        const totalChunks = Math.ceil(file.size / chunkSize);
        let currentChunk = 0;
  
        const progress = (bytesuploadedallfiles / allfilessize) * 100;

        const bytesleft = allfilessize-bytesuploadedallfiles
        const timeRemainingSeconds = bytesleft / bytesPerSecond;

    
        uploadProgressBar.style.width = `${progress.toFixed(2)}%`;
        uploadProgressText.textContent = `Uploading ${filenameV}... ${progress.toFixed(2)}%`;
        upt2.innerHTML = `${(bytesuploadedallfiles / (1024 * 1024)).toFixed(2)} MB / ${(allfilessize / (1024 * 1024)).toFixed(2)} MB<br>${formatTime(timeRemainingSeconds)}`;
        document.title = `${progress.toFixed(2)}%`;

        let uploadedMB = 0

        function createUploadPromises() {
            // Group chunks in batches of 5
            const promises = [];
            for (let i = 0; i < 5 && currentChunk < totalChunks; i++, currentChunk++) {
                const THISCHUNK = currentChunk
                
                const start = currentChunk * chunkSize;
                const end = Math.min(start + chunkSize, file.size);
                const chunk = file.slice(start, end);
  
                const reader = new FileReader();
  
                const promise = new Promise((resolve, reject) => {
                    reader.onload = async function() {
                        const chunkData = reader.result;
                        console.log("cd", chunkData)
  
                        // Send chunk data
                        await sendChunk(chunkData, THISCHUNK);
                        uploadedMB += chunkData.byteLength

                        const bytesleft = allfilessize-(bytesuploadedallfiles+uploadedMB)
                        const timeRemainingSeconds = bytesleft / bytesPerSecond;

                        const progress = ((bytesuploadedallfiles+uploadedMB) / allfilessize) * 100;
  
                        // Display progress and speed
                        uploadProgressBar.style.width = `${progress}%`;
                        uploadProgressText.textContent = `Uploading ${filenameV}... ${progress.toFixed(2)}%`;
                        upt2.innerHTML = `${((bytesuploadedallfiles+uploadedMB) / (1024 * 1024)).toFixed(2)} MB / ${(allfilessize / (1024 * 1024)).toFixed(2)} MB<br>${formatTime(timeRemainingSeconds)}`;
                        document.title = `${progress.toFixed(2)}%`;
  
                        resolve();
                    };
  
                    reader.onerror = function() {
                        reject(new Error("Error reading file chunk"));
                    };
  
                    reader.readAsArrayBuffer(chunk);
                });
  
                promises.push(promise);
            }
  
            return promises;
        }
  
        function uploadChunks() {
            // Run 5 promises at once
            const uploadBatch = createUploadPromises();
  
            if (uploadBatch.length > 0) {
                // Wait for the 5 promises to finish
                Promise.all(uploadBatch).then(() => {
                    // Once the batch finishes, check if there are more chunks to upload
                    if (currentChunk < totalChunks) {
                        uploadChunks();
                    } else {
                        finishUpload();
                    }
                }).catch((error) => {
                    console.error("Error during batch upload:", error);
                    reject(error);
                });
            }
        }
  
        async function sendChunk(chunkData, chunkid) {
            await setasync(chunksstorageid, chunkid.toString(), chunkData);
        }
  
        async function finishUpload() {
  
            let uploadsObject = await getasync("u", dvvv.split("/").pop());
            if (!uploadsObject) {
                uploadsObject = {};
            } else {
                uploadsObject = JSON.parse(uploadsObject);
            }

            console.log(uploadsObject)
  
            uploadsObject[filename] = [generateUUID(), chunksstorageid, totalChunks, file.size, thumbnailchunkid];
            await setasync("u", dvvv.split("/").pop(), JSON.stringify(uploadsObject));
            if (dvvv == dValue) {
                loaduploads();
            }
  
            resolve();
        }
  

        if (file.size === 0) {
            console.log("File is empty. Saving empty content.");
            setasync(chunksstorageid, "0", "").then(() => {
                finishUpload();
            })
        } else {
            uploadChunks();
        }
    });
  }
  

async function uploadthumbnail(file, chunksstorageid,) {
    return new Promise((resolve, reject) => {

  
        const filename = file.name;

  
        const chunkSize = 0.5 * 1024 * 1024;  // 0.5 MB per chunk
        const totalChunks = Math.ceil(file.size / chunkSize);
        let currentChunk = 0;


        //doesnt even need to chunk since so small do it anyway just incase? lol
        function createUploadPromises() {
            const promises = [];
            for (let i = 0; i < 5 && currentChunk < totalChunks; i++, currentChunk++) {
                const THISCHUNK = currentChunk
                
                const start = currentChunk * chunkSize;
                const end = Math.min(start + chunkSize, file.size);
                const chunk = file.slice(start, end);
  
                const reader = new FileReader();
  
                const promise = new Promise((resolve, reject) => {
                    reader.onload = async function() {
                        const chunkData = reader.result;
  
                        // Send chunk data
                        await sendChunk(chunkData, THISCHUNK);
                        resolve();
                    };
  
                    reader.onerror = function() {
                        reject(new Error("Error reading file chunk"));
                    };
  
                    reader.readAsArrayBuffer(chunk);
                });
  
                promises.push(promise);
            }
  
            return promises;
        }
  
        function uploadChunks() {
            // Run 5 promises at once
            const uploadBatch = createUploadPromises();
  
            if (uploadBatch.length > 0) {
                // Wait for the 5 promises to finish
                Promise.all(uploadBatch).then(() => {
                    // Once the batch finishes, check if there are more chunks to upload
                    if (currentChunk < totalChunks) {
                        uploadChunks();
                    } else {
                        finishUpload();
                    }
                }).catch((error) => {
                    console.error("Error during batch upload:", error);
                    reject(error);
                });
            }
        }
  
        async function sendChunk(chunkData, chunkid) {
            await setasync(chunksstorageid, chunkid.toString(), chunkData);
        }
  
        async function finishUpload() {
           resolve()
        }
  
        // Start the upload process
        uploadChunks();
    });
  }

  async function makethumbnailSMALLFILE(file) {
    let thumbnailchunkid = ""
    
    try {
        const ext = getFileExtension(file.name);
        const works = isSupportedByFFmpeg(ext)
        console.log(works)

        if (works == "audio") {
            return thumbnailchunkid
        }
        
        if (works) {

            const FFmpeg = window.FFmpeg
            ffmpeg = new FFmpeg()
            console.log(ffmpeg)
            ffmpeg.on("log", ({message}) => console.log(message))
            const coreURL = "/ffmpeg-core.js"
            await ffmpeg.load({coreURL})
            console.log("FFmpeg has loaded!")
    
          filebuff = await new Promise ((resolve, reject) => {
              const reader = new FileReader();
              reader.onload = function(event) {
                      resolve(event.target.result)
              };
              reader.readAsArrayBuffer(file);
          })
          const inputname = "input." + ext
          await ffmpeg.writeFile(inputname, new Uint8Array(filebuff))
    
          thumbnailchunkid = generateUUID()
    
    
    
          try {
              if (works == "image") {
                  await ffmpeg.exec([
                      '-i', inputname,            // Input file
                      '-vf', 'scale=128:128:force_original_aspect_ratio=decrease,pad=128:128:(ow-iw)/2:(oh-ih)/2', // Crop filter
                      '-s', '128x128',            // Resize to 128x128
                      "thumbnail.png"                  // Output file
                  ]);
                  const newdata = await ffmpeg.readFile("thumbnail.png")
                  const blob = new Blob([newdata], { type: 'image/png' });
                  const file = new File([blob], "thumbnail.png", { type: 'image/png' });
                  console.log(file)
                  whatisthumb = blob
      
                  await uploadthumbnail(file, thumbnailchunkid)
      
              } else if (works == "video") {
                  await ffmpeg.exec([
                      '-i', inputname,                           // Input video
                      '-vf', 'scale=128:128:force_original_aspect_ratio=decrease,pad=128:128:(ow-iw)/2:(oh-ih)/2', // Scale and pad to 128x128
                      '-frames:v', '1',                          // Extract only one frame
                      '-ss', '00:00:01',                         // Take the frame at 1 second into the video
                      "thumbnail.png"                            // Output file
                  ]);
                  const newdata = await ffmpeg.readFile("thumbnail.png");
                  const blob = new Blob([newdata], { type: 'image/png' });
                  const file = new File([blob], "thumbnail.png", { type: 'image/png' });
                  console.log(file)
                  whatisthumb = blob
    
                  await uploadthumbnail(file, thumbnailchunkid);
      
              }

              await setCachedBlob(thumbnailchunkid, whatisthumb)
      
          } catch(err) {
              console.log(err)
              thumbnailchunkid = ""
          }
    
    
        }
    
        if (ffmpeg) {
            ffmpeg.terminate()
        }

    } catch(err) {
        console.log(err)
    }

    return thumbnailchunkid
}


  async function trymakethumbnail(file) {
    let thumbnailchunkid = "";

    if (file.size < 1024 * 1024 * 1024) {
        return await makethumbnailSMALLFILE(file)
    }


    try {
        const ext = getFileExtension(file.name);
        const works = isSupportedByFFmpeg(ext); // Check file type (image, video, etc.)
        console.log(works);

        if (works === "audio") {
            return thumbnailchunkid; // No thumbnail for audio
        }

        thumbnailchunkid = generateUUID();

        if (works === "image") {
            const img = new Image();
            const objectURL = URL.createObjectURL(file);

            img.src = objectURL;
            await new Promise((resolve, reject) => {
                img.onload = resolve;
                img.onerror = () => reject(new Error("Invalid image file"));
            });
            
            // Create a canvas and draw the image
            const canvas = document.createElement("canvas");
            const ctx = canvas.getContext("2d");

            canvas.width = 128;
            canvas.height = 128;

            const aspectRatio = img.width / img.height;

            if (aspectRatio > 1) {
                // Landscape
                ctx.drawImage(
                    img,
                    (img.width - img.height) / 2,
                    0,
                    img.height,
                    img.height,
                    0,
                    0,
                    canvas.width,
                    canvas.height
                );
            } else {
                // Portrait
                ctx.drawImage(
                    img,
                    0,
                    (img.height - img.width) / 2,
                    img.width,
                    img.width,
                    0,
                    0,
                    canvas.width,
                    canvas.height
                );
            }

            // Convert canvas to blob
            const blob = await new Promise((resolve) =>
                canvas.toBlob(resolve, "image/png")
            );
            const thumbnailFile = new File([blob], "thumbnail.png", {
                type: "image/png",
            });

            console.log(thumbnailFile);
            await uploadthumbnail(thumbnailFile, thumbnailchunkid);
            await setCachedBlob(thumbnailchunkid, blob);

            URL.revokeObjectURL(objectURL); // Clean up
        } else if (works === "video") {
            const video = document.createElement("video");
            const objectURL = URL.createObjectURL(file);

            video.src = objectURL;
            video.currentTime = 1; // Seek to 1 second for the thumbnail
            await new Promise((resolve, reject) => {
                video.onloadeddata = resolve;
                video.onerror = () => reject(new Error("Invalid video file"));
            });

            // Create a canvas and draw the video frame
            const canvas = document.createElement("canvas");
            const ctx = canvas.getContext("2d");

            canvas.width = 128;
            canvas.height = 128;

            const aspectRatio = video.videoWidth / video.videoHeight;

            if (aspectRatio > 1) {
                // Landscape
                ctx.drawImage(
                    video,
                    (video.videoWidth - video.videoHeight) / 2,
                    0,
                    video.videoHeight,
                    video.videoHeight,
                    0,
                    0,
                    canvas.width,
                    canvas.height
                );
            } else {
                // Portrait
                ctx.drawImage(
                    video,
                    0,
                    (video.videoHeight - video.videoWidth) / 2,
                    video.videoWidth,
                    video.videoWidth,
                    0,
                    0,
                    canvas.width,
                    canvas.height
                );
            }

            // Convert canvas to blob
            const blob = await new Promise((resolve) =>
                canvas.toBlob(resolve, "image/png")
            );
            const thumbnailFile = new File([blob], "thumbnail.png", {
                type: "image/png",
            });

            console.log(thumbnailFile);
            await uploadthumbnail(thumbnailFile, thumbnailchunkid);
            await setCachedBlob(thumbnailchunkid, blob);

            URL.revokeObjectURL(objectURL); // Clean up
        }
    } catch (err) {
        console.log(err);
        thumbnailchunkid = "";
    }

    return thumbnailchunkid;
}


async function handleFileSelection(event) {
  const allfiles = event.target.files.length;

  if (moddingfiles) {
    return alert("Another process is running. please wait");
}


moddingfiles = true

  const dvvv = dValue;

  const uploadProgressBar = document.getElementById("upload-progress");
  const uploadProgressText = document.getElementById("upload-text");
  const upt2 = document.getElementById("upload-text2");

  let filenameV = ""
  if (allfiles == 1) {
    filenameV = event.target.files[0].name
  } else {
    filenameV = "Multiple Files"
  }

  let combinedsize = 0
  for (const file of (event.target.files)) {
    combinedsize += file.size
    }

    
    const uploadProgressPopup = document.getElementById("upload-progress-popup");
    uploadProgressPopup.style.display = "block";
    uploadProgressBar.style.width = `0%`;
    uploadProgressText.textContent = `Uploading ${filenameV}... 0%`;
    upt2.innerHTML = `0 MB / ${(combinedsize / (1024 * 1024)).toFixed(2)} MB<br>${formatTime(combinedsize / bytesPerSecond)}`;
    document.title = `0%`;

  let i = 0
  let uploaded = 0
  for (const file of (event.target.files)) {
      i += 1

      let uploadsObject = await getasync("u", dvvv.split("/").pop())
      if (!uploadsObject) {
          uploadsObject = {}
      } else {
          uploadsObject = JSON.parse(uploadsObject)
      }
      let n = file.name
      if (uploadsObject[n]) {
          console.log("resuming...")
          uploaded += file.size
          continue
      }

      const thumbnailchunkid = await trymakethumbnail(file)
      await setfile(file, i, allfiles, dvvv, thumbnailchunkid, combinedsize, uploaded, filenameV);
      uploaded += file.size
  };

  uploadProgressText.textContent = ``;
  upt2.innerHTML = ``;
  uploadProgressPopup.style.display = "none";

  document.title = `Unlimited - Cloud Storage`;
  moddingfiles = false

}

async function handleFolderSelection(event) {
    const allfiles = event.target.files.length;
    console.log(event.target.files)
    var str = event.target.files[0].webkitRelativePath;
    const foldername = str.split("/")[0]
    console.log(foldername)

    if (moddingfiles) {
        return alert("Another process is running. please wait");
    }
    moddingfiles = true
        
    const uploadProgressBar = document.getElementById("upload-progress");
    const uploadProgressText = document.getElementById("upload-text");
    const upt2 = document.getElementById("upload-text2");
        
    let dvvv = dValue;
    console.log(dvvv)

    let uploadsObject = await getasync("u", dvvv.split("/").pop())
    if (!uploadsObject) {
        uploadsObject = {}
    } else {
        uploadsObject = JSON.parse(uploadsObject)
    }
    let folderid = generateUUID()

    const uploadProgressPopup = document.getElementById("upload-progress-popup");
    uploadProgressPopup.style.display = "block";

    let combinedsize = 0
    for (const file of (event.target.files)) {
      combinedsize += file.size
    }


    uploadProgressBar.style.width = `0%`;
    uploadProgressText.textContent = `Uploading Folder ${foldername}... 0%`;
    upt2.innerHTML = `0 MB / ${(combinedsize / (1024 * 1024)).toFixed(2)} MB <br>${formatTime(combinedsize / bytesPerSecond)}`;
    document.title = `0%`;

    if (uploadsObject[foldername]) {
        folderid = uploadsObject[foldername][0]
    } else {
        uploadsObject[foldername] = [folderid, "folder"]
        await setasync("u", dvvv.split("/").pop(), JSON.stringify(uploadsObject))
        loaduploads()
    }


    const orid = dvvv+"/"+folderid

    let createdfolders = {}

    let uploaded = 0

    let i = 0
    for (const file of (event.target.files)) {
        console.log(file)
        i += 1

        let items = file.webkitRelativePath.split("/")
        items.shift();
        items.pop();

        console.log(items)
        let deep = orid
        for (const i of items) {
            if (!createdfolders[deep+i]) {

                let uploadsObject = await getasync("u", deep.split("/").pop())
                if (!uploadsObject) {
                    uploadsObject = {}
                } else {
                    uploadsObject = JSON.parse(uploadsObject)
                }
                let folderid = generateUUID()
            
                uploadsObject[i] = [folderid, "folder"]

                await setasync("u", deep.split("/").pop(), JSON.stringify(uploadsObject))

                createdfolders[deep+i] = folderid
                deep += "/"+folderid

            } else {
                deep += "/"+createdfolders[deep+i]
            }
        }
        console.log(deep)
  

        let uploadsObject = await getasync("u", deep.split("/").pop())
        if (!uploadsObject) {
            uploadsObject = {}
        } else {
            uploadsObject = JSON.parse(uploadsObject)
        }

        if (!uploadsObject[file.name]) {
            const thumbnailchunkid = await trymakethumbnail(file)
            console.log(thumbnailchunkid)
            await setfile(file, i, allfiles, deep.split("/").pop(), thumbnailchunkid, combinedsize, uploaded, `Folder ${foldername}`);
        } else {
            console.log("resuming...")

            const progress = (uploaded / combinedsize) * 100;

            const bytesleft = combinedsize-uploaded
            const timeRemainingSeconds = bytesleft / bytesPerSecond;


            uploadProgressBar.style.width = `${progress.toFixed(2)}%`;
            uploadProgressText.textContent = `Uploading Folder ${foldername}... ${progress.toFixed(2)}%`;
            upt2.innerHTML = `${(uploaded / (1024 * 1024)).toFixed(2)} MB / ${(combinedsize / (1024 * 1024)).toFixed(2)} MB<br>${formatTime(timeRemainingSeconds)}`;
            document.title = `${progress.toFixed(2)}%`;
        }


        uploaded += file.size
  
    };
    console.log("done")


    uploadProgressText.textContent = ``;
    upt2.innerHTML = ``;
    uploadProgressPopup.style.display = "none";
  
    document.title = `Unlimited - Cloud Storage`;
    moddingfiles = false

  
  }



function delay(ms) {
  return new Promise(resolve => {
      setTimeout(resolve, ms);
  });
}



async function downloadfile(filename, chunkid, totalchunks, filesize, returnasblob, alreadydownloaded, allfilessize, FilenameV) {
  const uploadProgressPopup = document.getElementById("upload-progress-popup");
  uploadProgressPopup.style.display = "block";

  const uploadProgressBar = document.getElementById("upload-progress");
  const uploadProgressText = document.getElementById("upload-text");
  const upt2 = document.getElementById("upload-text2");
  

  let allchunks = []
  let promises = [];

  let downloadedMB = 0
  let on = 0
  for (let i = 0; i < totalchunks; i++) {
    // Collect the promises for fetching chunks
    promises.push(getasync(chunkid, i.toString(), true).then(chunk => {
        on += 1
        downloadedMB += chunk.size
    
        const bytesleft = allfilessize-(downloadedMB+alreadydownloaded)
        const timeRemainingSeconds = bytesleft / BYTESPERDOWNLOAD;

        upt2.innerHTML = `${((downloadedMB+alreadydownloaded) / (1024 * 1024)).toFixed(2)} MB / ${((allfilessize) / (1024 * 1024)).toFixed(2)} MB<br>${formatTime(timeRemainingSeconds)}`;

        const progress = ((downloadedMB+alreadydownloaded) / allfilessize) * 100;
        uploadProgressBar.style.width = `${progress}%`;
        uploadProgressText.textContent = `Downloading ${FilenameV}... ${progress.toFixed(2)}%`;
        document.title = `${progress.toFixed(2)}%`;
        
        allchunks[i] = chunk;
    }));

    // Every 5 requests, wait for them to finish
    if (promises.length === 50 || i === totalchunks - 1) {
        await Promise.all(promises);
        promises = []; // Reset promises array for the next batch
    }


}


  const combinedBlob = new Blob(allchunks);

  if (returnasblob) {
    return combinedBlob
  }

  uploadProgressPopup.style.display = "none";
  

  const downloadLink = document.createElement("a");
  const url = URL.createObjectURL(combinedBlob);
  downloadLink.href = url;
  downloadLink.download = filename
  downloadLink.textContent = `Download ready!: ${filename}`
  downloadLink.click();

  document.getElementById("uploads-container").appendChild(downloadLink)
  document.title = `Unlimited - Cloud Storage`;
  return true
}

async function getfileasBLOB(chunkid, totalchunks) {
    let allchunks = []
    let promises = []

    for (let i = 0; i < totalchunks; i++) {
        promises.push(getasync(chunkid, i.toString(), true).then(chunk => {
            allchunks[i] = chunk
        }))
        
        if (promises.length === 50 || i === totalchunks - 1) {
            await Promise.all(promises)
            promises = [] // Reset promises array for next batch
        }
    }
    
    return new Blob(allchunks)
}



async function blobExists(chunkid) {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open("thumbnails");

        request.onupgradeneeded = (event) => {
            const db = event.target.result;

            // Create object store if it doesn't already exist
            if (!db.objectStoreNames.contains("ThumbnailsStore")) {
                db.createObjectStore("ThumbnailsStore", { keyPath: "chunkid" });
            }
        };


        request.onsuccess = (event) => {
            const db = event.target.result;

            const transaction = db.transaction("ThumbnailsStore", "readonly");
            const objectStore = transaction.objectStore("ThumbnailsStore");
            const getRequest = objectStore.get(chunkid);

            getRequest.onsuccess = (event) => {
                const result = event.target.result;
                resolve(!!result); // Resolve to true if the result exists, false otherwise
            };

            getRequest.onerror = () => {
                reject(new Error("Failed to check blob existence in IndexedDB."));
            };
        };

        request.onerror = () => {
            reject(new Error("Failed to open IndexedDB."));
        };
    });
}


async function fetchcachedblob(chunkid) {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open("thumbnails");

        request.onupgradeneeded = (event) => {
            const db = event.target.result;

            // Create object store if it doesn't already exist
            if (!db.objectStoreNames.contains("ThumbnailsStore")) {
                db.createObjectStore("ThumbnailsStore", { keyPath: "chunkid" });
            }
        };


        request.onsuccess = (event) => {
            const db = event.target.result;

            const transaction = db.transaction("ThumbnailsStore", "readonly");
            const objectStore = transaction.objectStore("ThumbnailsStore");
            const getRequest = objectStore.get(chunkid);

            getRequest.onsuccess = (event) => {
                const result = event.target.result;
                if (result && result.blob) {
                    resolve(result.blob);
                } else {
                    reject(new Error("Thumbnail not found in IndexedDB for the given chunkid."));
                }
            };

            getRequest.onerror = () => {
                reject(new Error("Failed to retrieve thumbnail from IndexedDB."));
            };
        };

        request.onerror = () => {
            reject(new Error("Failed to open IndexedDB."));
        };
    });
}

async function setCachedBlob(chunkid, blob) {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open("thumbnails");

        request.onupgradeneeded = (event) => {
            const db = event.target.result;

            // Create object store if it doesn't already exist
            if (!db.objectStoreNames.contains("ThumbnailsStore")) {
                db.createObjectStore("ThumbnailsStore", { keyPath: "chunkid" });
            }
        };

        request.onsuccess = (event) => {
            const db = event.target.result;

            const transaction = db.transaction("ThumbnailsStore", "readwrite");
            const objectStore = transaction.objectStore("ThumbnailsStore");

            // Add or update the blob in the object store
            const putRequest = objectStore.put({ chunkid, blob });

            putRequest.onsuccess = () => {
                resolve(`Blob with chunkid '${chunkid}' has been cached.`);
            };

            putRequest.onerror = () => {
                reject(new Error("Failed to cache the blob in IndexedDB."));
            };
        };

        request.onerror = () => {
            reject(new Error("Failed to open IndexedDB."));
        };
    });
}



function getFileExtension(fileName) {
    var parts = fileName.split('.');
    if (parts.length > 1) {
        return parts.pop().toLowerCase();
    }
    return ""; // If no extension found
}

let loadedscripts = {}

function createscript(URL) {
    return new Promise((resolve, reject) => {
        if (loadedscripts[URL]) {
            resolve(true);
            return;
        }

        const s = document.createElement("script");
        s.src = URL;
        document.head.appendChild(s);

        s.onload = function() {
            loadedscripts[URL] = true;
            resolve(true);
        };

        s.onerror = function() {
            reject(new Error(`Failed to load script: ${URL}`));
        };
    });
}

function formatSize(bytes) {
    if (bytes < 1024) {
        return bytes + " Bytes";
    } else if (bytes < 1048576) {
        return (bytes / 1024).toFixed(2) + " KB";
    } else if (bytes < 1073741824) {
        return (bytes / 1048576).toFixed(2) + " MB";
    } else if (bytes < 1099511627776) {
        return (bytes / 1073741824).toFixed(2) + " GB";
    } else {
        return (bytes / 1099511627776).toFixed(2) + " TB";
    }
}

async function createitems(uploadsObject, dva) {
  if (dValue != dva) {
      return
  }
  console.log(uploadsObject)

  const uploadsContainer = document.getElementById("fileslist");

  const existingLinks = uploadsContainer.querySelectorAll(".itemlol");
  existingLinks.forEach(link => {
      if (link.parentNode === uploadsContainer) {
          uploadsContainer.removeChild(link);
      }
  });

  const uploadsEntries = Object.entries(uploadsObject)

  // Separate folders and files
  const folders = uploadsEntries.filter(([filename]) => uploadsObject[filename][1] === "folder");
  const files = uploadsEntries.filter(([filename]) => uploadsObject[filename][1] !== "folder");

  // Sort folders and files alphabetically
  folders.sort((a, b) => a[0].localeCompare(b[0]));
  files.sort((a, b) => a[0].localeCompare(b[0]));

  function showbin() {
    const link = document.createElement("a");
    link.classList.add("itemlol")
  
    link.addEventListener("click", function(event) {
        event.preventDefault();
        dValue = "root/Bin"
        dValueLook = "root/Bin"
        loaduploads()
    });
    
    const div = document.createElement("div");
    div.className = "list-item folder"; // Apply a CSS class for styling
    
    const span = document.createElement("span");
    span.textContent = "🗑️Bin";
  
    div.appendChild(span);
    link.appendChild(div);
    uploadsContainer.appendChild(link);


    div.addEventListener("dragenter", async function(event) {
        event.preventDefault();
        div.classList.add("dragingon")
        window.dragtofolder = "Bin"
        window.dragtofolname = "Bin"
      })

    div.addEventListener("dragleave", async function(event) {
        const s = window.dragtofolder
        div.classList.remove("dragingon")
        await delay(500)
        if (s == window.dragtofolder) {
            window.dragtofolder = null
        }
    })

  }


  if (dva == "root" && (localStorage.getItem('BinVis') == "true")) {
    showbin()
  }



  // Create and append folder entries (colored yellow)
  folders.forEach(([filename, filelink]) => {
      const link = document.createElement("a");
      link.classList.add("itemlol")

      link.addEventListener("click", function(event) {
          event.preventDefault();
          dValue = dValue + "/" + filelink[0]
          dValueLook = dValueLook + "/" + filename
          loaduploads()
      });

    
      const div = document.createElement("div");
      div.className = "list-item folder"; // Apply a CSS class for styling
      div.draggable = true


      const span = document.createElement("span");
      span.textContent = "📁" + filename;

      const delbutton = document.createElement("i")
      delbutton.textContent = "delete"
      delbutton.classList.add("material-icons")
      delbutton.classList.add("delicon")

      const downloadbtn = document.createElement("i")
      downloadbtn.textContent = "download"
      downloadbtn.classList.add("material-icons")
      downloadbtn.classList.add("downfol")



      delbutton.addEventListener("click", async function(event) {
        event.stopPropagation();

        
        if (moddingfiles) {
            return alert("Another process is running. please wait");
        }
    
       
          if (confirm(`Would you like to move folder ${filename} to the bin`)) {
            moddingfiles = true
              let uploadsObject = await getasync("u", dValue.split("/").pop())
              if (!uploadsObject) {
                  uploadsObject = {}
              } else {
                  uploadsObject = JSON.parse(uploadsObject)
              }

              let Binobjects = await getasync("u", "Bin")
              if (!Binobjects) {
                Binobjects = {}
              } else {
                Binobjects = JSON.parse(Binobjects)
              }

              let prefix = "" //javascript good
              while (Binobjects[prefix + filename]) {
                prefix += 1
              }

              Binobjects[prefix+filename] = uploadsObject[filename]
              delete uploadsObject[filename]
              await setasync("u", "Bin", JSON.stringify(Binobjects))
              await setasync("u", dValue.split("/").pop(), JSON.stringify(uploadsObject))
              moddingfiles = false
              loaduploads()
          }
      });

      downloadbtn.addEventListener("click", async function(event) {
        event.stopPropagation();

        if (moddingfiles) {
            return alert("Another process is running. please wait");
        }
        


        moddingfiles = true

        const zip = new JSZip();

        const dvvv = dValue

        let ALLfilessize = 0
        let foundfiles = 0

        const uploadProgressPopup = document.getElementById("upload-progress-popup");
        uploadProgressPopup.style.display = "block";
      
        const uploadProgressBar = document.getElementById("upload-progress");
        const uploadProgressText = document.getElementById("upload-text");
        const upt2 = document.getElementById("upload-text2");

        uploadProgressBar.style.width = `0%`;
        uploadProgressText.textContent = `Discovering ${foundfiles} Files`;
        const totalMB = ALLfilessize / (1024 * 1024);
        upt2.innerHTML = `0.00 MB`;
        
        async function readsizes(folderID) {
            let uploadsObject = await getasync("u", folderID)
            if (!uploadsObject) {
                uploadsObject = {}
            } else {
                uploadsObject = JSON.parse(uploadsObject)
            }
            console.log(uploadsObject)

            for (const i in uploadsObject) {
                console.log(i)
                const data = uploadsObject[i]
                console.log(data)
                if (data[1] != "folder") {
                    ALLfilessize += data[3]
                    foundfiles += 1

                    uploadProgressBar.style.width = `0%`;
                    uploadProgressText.textContent = `Discovering ${foundfiles} Files`;
                    const totalMB = ALLfilessize / (1024 * 1024);
                    upt2.innerHTML = `${totalMB.toFixed(2)} MB`;

                } else {
                    await readsizes(data[0])
                }
            }
        }

        await readsizes(filelink[0])
        console.log(ALLfilessize, foundfiles)

        let alreadydownloaded = 0

        async function dlfollol(folderID, mainfolder) {

            let uploadsObject = await getasync("u", folderID)
            if (!uploadsObject) {
                uploadsObject = {}
            } else {
                uploadsObject = JSON.parse(uploadsObject)
            }
            console.log(uploadsObject)
    
            let on = 0
    
            let nonFolderCount = 0;
            for (const i in uploadsObject) {
                const data = uploadsObject[i];
                if (data[1] !== "folder") {
                    nonFolderCount++;
                }
            }
            
            for (const i in uploadsObject) {
                on += 1
                console.log(i)
                const data = uploadsObject[i]
                console.log(data)
                if (data[1] != "folder") {
                    const progress = ((alreadydownloaded) / ALLfilessize) * 100;

                    const bytesleft = ALLfilessize-(alreadydownloaded)
                    const timeRemainingSeconds = bytesleft / BYTESPERDOWNLOAD;
            

                    uploadProgressBar.style.width = `${progress}%`;
                    uploadProgressText.textContent = `Downloading Folder ${filename}... 0%`;
                    const totalMB = ALLfilessize / (1024 * 1024);
                    const totaldled = alreadydownloaded / (1024 * 1024);

                    upt2.innerHTML = `${totaldled.toFixed(2)} MB / ${totalMB.toFixed(2)} MB<br>${formatTime(timeRemainingSeconds)}`;

                    const blob = await downloadfile(i, data[1], data[2], data[3], true, alreadydownloaded, ALLfilessize, `Folder ${filename}`)
                    console.log(blob)
                    alreadydownloaded += blob.size
                    mainfolder.file(i, blob);
                } else {
                    const myFolder = mainfolder.folder(i);
                    await dlfollol(data[0], myFolder)
                }
            }
        }

        await dlfollol(filelink[0], zip)

 

        document.title = `Unlimited - Cloud Storage`;

        zip.generateAsync({ type: "blob" })
        .then(function(content) {
            const downloadLink = document.createElement("a");
            const url = URL.createObjectURL(content);
            downloadLink.href = url;
            downloadLink.download = filename+'.zip'; // Replace 'myZip.zip' with desired filename
            downloadLink.textContent = `Download ready!: ${downloadLink.download}`;
            downloadLink.click();

            moddingfiles = false
        });

    });

      div.appendChild(span);
      if (dva.split("/").pop() != "Bin") {
        div.appendChild(delbutton)
      }

      div.appendChild(downloadbtn)
      link.appendChild(div);
      uploadsContainer.appendChild(link);

      let draggingthisfolder = false


      
      div.addEventListener("dragenter", async function(event) {
        if (draggingthisfolder) {
            return
        }
        event.preventDefault();
        div.classList.add("dragingon")
        window.dragtofolder = filelink[0]
        window.dragtofolname = filename
      })

      div.addEventListener("dragleave", async function(event) {
        if (draggingthisfolder) {
            return
        }
        const s = window.dragtofolder
        div.classList.remove("dragingon")
        await delay(500)
        if (s == window.dragtofolder) {
            window.dragtofolder = null
        }
      })



      div.addEventListener("dragstart", function(event) {
        draggingthisfolder = true
        window.dragtofolder = null;
        console.log(filelink);
    
        // Scroll to the top of the page without affecting the drag
        setTimeout(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 0); // Defer the scroll to avoid conflicts with the dragstart event
    });
    

      div.addEventListener("dragend", async function(event) {
        draggingthisfolder = false
        
        if (moddingfiles) {
            return alert("Another process is running. please wait");
        }
    
        console.log("stopped!")
        console.log(window.dragtofolder)
        const FoldertoMovto = window.dragtofolder
        console.log(FoldertoMovto)
        if (!FoldertoMovto) {
            return alert("You must drag the file onto a folder to move it")
        }

        if (FoldertoMovto == "Bin") {
            if (confirm(`Would you like to move folder ${filename} to the bin`)) {
                moddingfiles = true
                  let uploadsObject = await getasync("u", dValue.split("/").pop())
                  if (!uploadsObject) {
                      uploadsObject = {}
                  } else {
                      uploadsObject = JSON.parse(uploadsObject)
                  }
    
                  let Binobjects = await getasync("u", "Bin")
                  if (!Binobjects) {
                    Binobjects = {}
                  } else {
                    Binobjects = JSON.parse(Binobjects)
                  }
    
                  let prefix = "" //javascript good
                  while (Binobjects[prefix + filename]) {
                    prefix += 1
                  }
    
                  Binobjects[prefix+filename] = uploadsObject[filename]
                  delete uploadsObject[filename]
                  await setasync("u", "Bin", JSON.stringify(Binobjects))
                  await setasync("u", dValue.split("/").pop(), JSON.stringify(uploadsObject))
                  moddingfiles = false
                  loaduploads()
            }

            return
        }

        if (!confirm(`Would you like to move ${filename} into ${window.dragtofolname}`)) {
            return
        }

        moddingfiles = true

        const currentfolder = dva.split("/").pop()

        let uploadsObject = await getasync("u", currentfolder)
        if (!uploadsObject) {
            uploadsObject = {}
        } else {
            uploadsObject = JSON.parse(uploadsObject)
        }

        let uploadsObject2 = await getasync("u", FoldertoMovto)
        if (!uploadsObject2) {
            uploadsObject2 = {}
        } else {
            uploadsObject2 = JSON.parse(uploadsObject2)
        }

        let prefix = "" //javascript good
        while (uploadsObject2[prefix + filename]) {
          prefix += 1
        }

        uploadsObject2[prefix + filename] = filelink


        await setasync("u", FoldertoMovto, JSON.stringify(uploadsObject2))
        if (uploadsObject[filename]) {
            delete uploadsObject[filename]
        }
        await setasync("u", currentfolder, JSON.stringify(uploadsObject))





        moddingfiles = false
        loaduploads()
      })


  });


  // Create and append file entries
  files.forEach( async ([filename, filelink]) => {
      const link = document.createElement("a");
      link.classList.add("itemlol")


      var fileExtension = getFileExtension(filename);
      const div = document.createElement("div");
      div.className = "list-item";
      div.draggable = true

      div.addEventListener("dragstart", function(event) {
        window.dragtofolder = null;
        console.log(filelink);
    
        // Scroll to the top of the page without affecting the drag
        setTimeout(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 0); // Defer the scroll to avoid conflicts with the dragstart event
    });
    

      div.addEventListener("dragend", async function(event) {

        if (moddingfiles) {
            return alert("Another process is running. please wait");
        }
    
        console.log("stopped!")
        console.log(window.dragtofolder)
        const FoldertoMovto = window.dragtofolder
        console.log(FoldertoMovto)
        if (!FoldertoMovto) {
            return alert("You must drag the file onto a folder to move it")
        }



        if (FoldertoMovto == "Bin") {
            if (confirm(`Would you like to move ${filename} to the bin`)) {
                moddingfiles = true
                  let uploadsObject = await getasync("u", dValue.split("/").pop())
                  if (!uploadsObject) {
                      uploadsObject = {}
                  } else {
                      uploadsObject = JSON.parse(uploadsObject)
                  }
    
                  let Binobjects = await getasync("u", "Bin")
                  if (!Binobjects) {
                    Binobjects = {}
                  } else {
                    Binobjects = JSON.parse(Binobjects)
                  }
    
                  let prefix = "" //javascript good
                  while (Binobjects[prefix + filename]) {
                    prefix += 1
                  }
    
                  Binobjects[prefix+filename] = uploadsObject[filename]
                  delete uploadsObject[filename]
                  await setasync("u", "Bin", JSON.stringify(Binobjects))
                  await setasync("u", dValue.split("/").pop(), JSON.stringify(uploadsObject))
                  moddingfiles = false
                  loaduploads()
            }

            return
        }
       
        if (!confirm(`Would you like to move ${filename} into ${window.dragtofolname}`)) {
            return
        }



        moddingfiles = true

        const currentfolder = dva.split("/").pop()

        let uploadsObject = await getasync("u", currentfolder)
        if (!uploadsObject) {
            uploadsObject = {}
        } else {
            uploadsObject = JSON.parse(uploadsObject)
        }

        let uploadsObject2 = await getasync("u", FoldertoMovto)
        if (!uploadsObject2) {
            uploadsObject2 = {}
        } else {
            uploadsObject2 = JSON.parse(uploadsObject2)
        }

        let prefix = "" //javascript good
        while (uploadsObject2[prefix + filename]) {
          prefix += 1
        }


        uploadsObject2[prefix + filename] = filelink
        await setasync("u", FoldertoMovto, JSON.stringify(uploadsObject2))
        if (uploadsObject[filename]) {
            delete uploadsObject[filename]
        }
        await setasync("u", currentfolder, JSON.stringify(uploadsObject))

        moddingfiles = false
        loaduploads()
      })


      let e = emoji[fileExtension]
      if (!e) {
          e = "❓"
      }

      if (filelink[4] != "") { //has a thumbnail
        const img = document.createElement("img");
        let imgsrc = ""
        try {
            const imgblob = await fetchcachedblob(filelink[4])
            imgsrc = URL.createObjectURL(imgblob);
        } catch(err) {
            imgsrc = ""
        }
     
        img.src = imgsrc
        img.className = "thumbnail"; 
        img.style.width = "128px"; 
        img.style.height = "128px";
        img.style.objectFit = "cover";

        div.appendChild(img);


        const span = document.createElement("span");
        span.textContent = filename;
        div.appendChild(span);
      } else {
        const span = document.createElement("span");
        span.textContent = e + filename;
        div.appendChild(span);
      }


      link.addEventListener("click", async function(event) {
        event.preventDefault();

        if (moddingfiles) {
            return alert("Another process is running. please wait");
        }

        const works = isSupportedByFFmpeg(fileExtension)
        console.log(works)
        
        if (works) {
            if (works == "image") {
                document.getElementById("filelol").style.display = "";
                window.streamingfile = true;
                const img = document.createElement("img");
                img.classList.add("fileprevmedia");
                document.getElementById("filespot").innerHTML = "";
                document.getElementById("filespot").appendChild(img);
                const l = document.createElement("p");
                l.textContent = "Loading Image...";
                document.getElementById("filespot").appendChild(l);
                const totalchunks = filelink[2];
                const chunkid = filelink[1];
                const filesize = filelink[3];
                let loadedSize = 0;
                let chunks = [];
    
                // Function to fetch chunks concurrently in batches
                const fetchChunksInBatches = async () => {
                    const batchSize = 50; // Number of concurrent requests per batch
                    let currentChunk = 0;
                
                    while (currentChunk < totalchunks && window.streamingfile) {
                        const batchPromises = [];
                        // Create promises for the current batch of chunks
                        for (let i = currentChunk; i < Math.min(currentChunk + batchSize, totalchunks); i++) {
                            batchPromises.push(
                                getasync(chunkid, i.toString(), true).then(chunk => {
                                    // Ensure each chunk is placed at the correct index
                                    chunks[i] = chunk;
                                    loadedSize += chunk.size;
                
                                    // Update progress after each chunk is fetched
                                    const loadedMB = (loadedSize / (1024 * 1024)).toFixed(2); // Loaded size in MB
                                    const totalMB = (filesize / (1024 * 1024)).toFixed(2); // Total file size in MB
                                    const progress = ((loadedSize / filesize) * 100).toFixed(2); // Percentage progress
                                    l.textContent = `${loadedMB} MB / ${totalMB} MB (${progress}%)`;
                                })
                            );
                        }
                
                        // Wait for all promises in the batch to resolve
                        await Promise.all(batchPromises);
                
                        currentChunk += batchSize;
                    }
                
                    // Once all chunks are loaded, combine them into a blob and update the image
                    const blob = new Blob(chunks, { type: 'application/octet-stream' });
                    const imgUrl = URL.createObjectURL(blob);
                    img.src = imgUrl;
                
                    l.remove(); // Remove the "Connecting..." text once all chunks are loaded
                };
                
                // Start the batch fetching
                fetchChunksInBatches();
                
    
            } else if (works == "video") {
                document.getElementById("filelol").style.display = "";
                window.streamingfile = true;
                const img = document.createElement("video");
                img.classList.add("fileprevmedia");
                img.controls = true
                document.getElementById("filespot").innerHTML = "";
                document.getElementById("filespot").appendChild(img);
                const l = document.createElement("p");
                l.textContent = "Loading Video...";
                document.getElementById("filespot").appendChild(l);
                const totalchunks = filelink[2];
                const chunkid = filelink[1];
                const filesize = filelink[3];
                let loadedSize = 0;
                let chunks = [];
    
                // Function to fetch chunks concurrently in batches
                const fetchChunksInBatches = async () => {
                    const batchSize = 50; // Number of concurrent requests per batch
                    let currentChunk = 0;
                
                    while (currentChunk < totalchunks && window.streamingfile) {
                        const batchPromises = [];
                        // Create promises for the current batch of chunks
                        for (let i = currentChunk; i < Math.min(currentChunk + batchSize, totalchunks); i++) {
                            batchPromises.push(
                                getasync(chunkid, i.toString(), true).then(chunk => {
                                    // Ensure each chunk is placed at the correct index
                                    chunks[i] = chunk;
                                    loadedSize += chunk.size;
                
                                    // Update progress after each chunk is fetched
                                    const loadedMB = (loadedSize / (1024 * 1024)).toFixed(2); // Loaded size in MB
                                    const totalMB = (filesize / (1024 * 1024)).toFixed(2); // Total file size in MB
                                    const progress = ((loadedSize / filesize) * 100).toFixed(2); // Percentage progress
                                    l.textContent = `${loadedMB} MB / ${totalMB} MB (${progress}%)`;
                                })
                            );
                        }
                
                        // Wait for all promises in the batch to resolve
                        await Promise.all(batchPromises);
                
                        currentChunk += batchSize;
                    }
                
                    // Once all chunks are loaded, combine them into a blob and update the image
                    const blob = new Blob(chunks, { type: 'application/octet-stream' });
                    const imgUrl = URL.createObjectURL(blob);
                    img.src = imgUrl;
                
                    l.remove(); // Remove the "Connecting..." text once all chunks are loaded
                };
                
                // Start the batch fetching
                fetchChunksInBatches();
                
            } else {

                document.getElementById("filelol").style.display = "";
                window.streamingfile = true;
                const audio = document.createElement("audio"); // Create an audio element instead of video
                audio.classList.add("fileprevmedia");
                audio.controls = true; // Enable controls for the audio player
                document.getElementById("filespot").innerHTML = ""; // Clear the filespot container
                document.getElementById("filespot").appendChild(audio); // Append the audio player
                const l = document.createElement("p");
                l.textContent = "Loading Audio..."; // Text indicating that the audio is loading
                document.getElementById("filespot").appendChild(l);
                
                const totalchunks = filelink[2];
                const chunkid = filelink[1];
                const filesize = filelink[3];
                let loadedSize = 0;
                let chunks = [];
                
                // Function to fetch chunks concurrently in batches
                const fetchChunksInBatches = async () => {
                    const batchSize = 50; // Number of concurrent requests per batch
                    let currentChunk = 0;
                
                    while (currentChunk < totalchunks && window.streamingfile) {
                        const batchPromises = [];
                        // Create promises for the current batch of chunks
                        for (let i = currentChunk; i < Math.min(currentChunk + batchSize, totalchunks); i++) {
                            batchPromises.push(
                                getasync(chunkid, i.toString(), true).then(chunk => {
                                    // Ensure each chunk is placed at the correct index
                                    chunks[i] = chunk;
                                    loadedSize += chunk.size;
                
                                    // Update progress after each chunk is fetched
                                    const loadedMB = (loadedSize / (1024 * 1024)).toFixed(2); // Loaded size in MB
                                    const totalMB = (filesize / (1024 * 1024)).toFixed(2); // Total file size in MB
                                    const progress = ((loadedSize / filesize) * 100).toFixed(2); // Percentage progress
                                    l.textContent = `${loadedMB} MB / ${totalMB} MB (${progress}%)`;
                                })
                            );
                        }
                
                        // Wait for all promises in the batch to resolve
                        await Promise.all(batchPromises);
                
                        currentChunk += batchSize;
                    }
                
                    // Once all chunks are loaded, combine them into a blob and update the audio source
                    const blob = new Blob(chunks, { type: 'audio/mpeg' }); // Set MIME type to audio/mpeg
                    const audioUrl = URL.createObjectURL(blob);
                    audio.src = audioUrl; // Set the audio source to the blob URL
                
                    l.remove(); // Remove the "Loading Audio..." text once all chunks are loaded
                };
                
                // Start the batch fetching
                fetchChunksInBatches();
                

            }
        } else {

            const codeBlock = document.createElement('pre');

            document.getElementById("filelol").style.display = "";
            window.streamingfile = true;
            const img = document.createElement("code");
            document.getElementById("filespot").innerHTML = "";
            codeBlock.appendChild(img)
            document.getElementById("filespot").appendChild(codeBlock);
            const l = document.createElement("p");
            l.textContent = "Loading File...";
            document.getElementById("filespot").appendChild(l);
            const totalchunks = filelink[2];
            const chunkid = filelink[1];
            const filesize = filelink[3];
            let loadedSize = 0;
            let chunks = [];

            // Function to fetch chunks concurrently in batches
            const fetchChunksInBatches = async () => {
                const batchSize = 50; // Number of concurrent requests per batch
                let currentChunk = 0;
            
                while (currentChunk < totalchunks && window.streamingfile) {
                    const batchPromises = [];
                    // Create promises for the current batch of chunks
                    for (let i = currentChunk; i < Math.min(currentChunk + batchSize, totalchunks); i++) {
                        batchPromises.push(
                            getasync(chunkid, i.toString(), true).then(chunk => {
                                // Ensure each chunk is placed at the correct index
                                chunks[i] = chunk;
                                loadedSize += chunk.size;
            
                                // Update progress after each chunk is fetched
                                const loadedMB = (loadedSize / (1024 * 1024)).toFixed(2); // Loaded size in MB
                                const totalMB = (filesize / (1024 * 1024)).toFixed(2); // Total file size in MB
                                const progress = ((loadedSize / filesize) * 100).toFixed(2); // Percentage progress
                                l.textContent = `${loadedMB} MB / ${totalMB} MB (${progress}%)`;
                            })
                        );
                    }
            
                    // Wait for all promises in the batch to resolve
                    await Promise.all(batchPromises);
            
                    currentChunk += batchSize;
                }


                const blob = new Blob(chunks, { type: 'application/octet-stream' });
                const imgUrl = URL.createObjectURL(blob);

                console.log(fileExtension)

                l.remove();

                const supportedLanguages = {
                    py: "python",
                    js: "javascript",
                    ts: "typescript",
                    html: "html",
                    css: "css",
                    java: "java",
                    cpp: "cpp",
                    c: "c",
                    php: "php",
                    ruby: "ruby",
                    go: "go",
                    bash: "bash",
                    json: "json",
                    sql: "sql",
                    xml: "xml",
                    markdown: "markdown",
                    yaml: "yaml",
                    lua: "lua",
                    swift: "swift",
                    kotlin: "kotlin",
                    perl: "perl",
                    objectivec: "objectivec",
                    rust: "rust",
                    vhdl: "vhdl",
                    htmlbars: "htmlbars",
                    dart: "dart",
                    elixir: "elixir",
                    elm: "elm",
                    shell: "shell",
                    erlang: "erlang",
                    powershell: "powershell",
                    hack: "hack",
                    groovy: "groovy",
                    scala: "scala",
                    asm: "asm",
                    haskell: "haskell",
                    actionscript: "actionscript",
                    csharp: "csharp",
                    tex: "tex",
                    latex: "latex",
                    json5: "json5",
                    scss: "scss",
                    twig: "twig",
                    ini: "ini"
                };
                
                if (fileExtension in supportedLanguages) {
                    const t = await fetch(imgUrl)
                    const ti = await t.text()
    
                    const parser = new DOMParser();
                    const decodedTi = parser.parseFromString(ti, 'text/html').documentElement.textContent;
                    img.innerHTML = decodedTi;
                    img.classList.add(supportedLanguages[fileExtension]);
                    img.classList.add("codinglang");
                    await createscript("https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.5.1/highlight.min.js");
                    hljs.highlightAll();
                
                } else if (fileExtension == "") {

                } else {
                    const t = await fetch(imgUrl)
                    const ti = await t.text()
    
                    img.innerText = ti;
                }
                

               
            };
            
            // Start the batch fetching
            fetchChunksInBatches();
        }

    });


      const delbutton = document.createElement("i")
      delbutton.textContent = "delete"
      delbutton.classList.add("material-icons")
      delbutton.classList.add("delicon")

      delbutton.addEventListener("click", async function(event) {
        event.stopPropagation();

        if (moddingfiles) {
            return alert("Another process is running. please wait");
        }

          if (confirm(`Would you like to move file ${filename} to the bin`)) {
            moddingfiles = true
              let uploadsObject = await getasync("u", dValue.split("/").pop())
              if (!uploadsObject) {
                  uploadsObject = {}
              } else {
                  uploadsObject = JSON.parse(uploadsObject)
              }

              let Binobjects = await getasync("u", "Bin")
              if (!Binobjects) {
                Binobjects = {}
              } else {
                Binobjects = JSON.parse(Binobjects)
              }
              let prefix = "" //javascript good
              while (Binobjects[prefix + filename]) {
                prefix += 1
              }

              Binobjects[prefix+filename] = uploadsObject[filename]
              delete uploadsObject[filename]
              await setasync("u", "Bin", JSON.stringify(Binobjects))
              await setasync("u", dValue.split("/").pop(), JSON.stringify(uploadsObject))
              moddingfiles = false
              loaduploads()
   
          }
      });


      const downloadbtn = document.createElement("i")
      downloadbtn.textContent = "download"
      downloadbtn.classList.add("material-icons")
      downloadbtn.classList.add("downfol")

        downloadbtn.addEventListener("click", async function(event) {
            event.stopPropagation();

            if (moddingfiles) {
                return alert("Another process is running. please wait");
            }
            
            moddingfiles = true

            const alreadydownloaded = 0
            const filesize = filelink[3]

            const uploadProgressPopup = document.getElementById("upload-progress-popup");
            uploadProgressPopup.style.display = "block";
          
            const uploadProgressBar = document.getElementById("upload-progress");
            const uploadProgressText = document.getElementById("upload-text");
            const upt2 = document.getElementById("upload-text2");
            
            const bytesleft = filesize-(alreadydownloaded)
            const timeRemainingSeconds = bytesleft / BYTESPERDOWNLOAD;

            uploadProgressBar.style.width = `0%`;
            uploadProgressText.textContent = `Downloading ${filename}... 0%`;
            const totalMB = filesize / (1024 * 1024);
            upt2.innerHTML = `0 MB / ${totalMB.toFixed(2)} MB<br>${formatTime(timeRemainingSeconds)}`;
          
          
            await downloadfile(filename, filelink[1], filelink[2], filelink[3], false, alreadydownloaded, filesize, filename)

            moddingfiles = false

        });

        const sizedisp = document.createElement("p")
        const size = filelink[3]

        sizedisp.textContent = formatSize(size)
        sizedisp.classList.add("sizeele")
  
        div.appendChild(sizedisp)
  


      if ("Bin" != dva.split("/").pop()) {
        div.appendChild(delbutton)
      }
      div.appendChild(downloadbtn)
      link.appendChild(div);
      uploadsContainer.appendChild(link);




  });






}



async function loaduploads() {
  createpath()
  createitems({}, dValue)


  let i = localStorage.getItem("up1" + dValue.split("/").pop())

  let cachedUploadsObject
  if (i) {
      cachedUploadsObject = JSON.parse(i);
      createitems(cachedUploadsObject, dValue)
  }

  let started = dValue

  let uploadsObject = await getasync("u", started.split("/").pop())

  if (!uploadsObject) {
      uploadsObject = {}
  } else {
      uploadsObject = JSON.parse(uploadsObject)
      localStorage.setItem("up1" + started.split("/").pop(), JSON.stringify(uploadsObject));
  }

  if (cachedUploadsObject) {
    if (JSON.stringify(cachedUploadsObject) != JSON.stringify(uploadsObject)) {
        createitems(uploadsObject, started)
    }
  } else {
    createitems(uploadsObject, started)
  }

  



}


document.addEventListener("DOMContentLoaded", function() {
  loaduploads();
});


function reload() {
  document.getElementById("auth").style.display = "none"
  document.getElementById("content").style.display = "none"
  dValue = "root"
  dValueLook = "root"
  loaduploads()

  const apikey = localStorage.getItem("apikey")
  const userid = localStorage.getItem("id")
  if (!apikey || !userid) {
      document.getElementById("auth").style.display = ""
  } else {
      document.getElementById("content").style.display = ""
  }
}
reload()





// Encrypt the data using XOR with the provided key
function encryptData(data) {
    const key = localStorage.getItem("enc"); // Get the key from localStorage
    if (!key) {
        throw new Error("Encryption key not found in localStorage.");
    }

    const keyBytes = Array.from(key).map(c => c.charCodeAt(0)); // Convert the key to an array of byte values

    // Convert data to byte values (string -> Uint8Array)
    let dataBytes;
    if (typeof data === 'string') {
        // Convert string to Uint8Array by encoding it as UTF-8 bytes
        const encoder = new TextEncoder();
        dataBytes = encoder.encode(data);
    } else if (data instanceof Uint8Array) {
        dataBytes = data; // Use Uint8Array directly if provided
    } else if (data instanceof ArrayBuffer) {
        dataBytes = new Uint8Array(data); // Convert ArrayBuffer to Uint8Array
    } else {
        throw new Error("Invalid data type.");
    }
    

    // XOR encryption (same operation as decryption)
    const encryptedData = dataBytes.map((byte, index) => byte ^ keyBytes[index % keyBytes.length]);

    return encryptedData
}


// Decrypt the encrypted data using XOR with the provided key
function decryptData(encryptedData, binary) {
    const key = localStorage.getItem("enc"); // Get the key from localStorage
    if (!key) {
        throw new Error("Encryption key not found in localStorage.");
    }

    const keyBytes = Array.from(key).map(c => c.charCodeAt(0)); // Convert the key to an array of byte values

    // If encryptedData is a string, convert it to a Uint8Array
    let dataBytes;
    if (typeof encryptedData === 'string') {

        dataBytes = new Uint8Array(encryptedData.length);
        for (let i = 0; i < encryptedData.length; i++) {
            dataBytes[i] = encryptedData.charCodeAt(i);
        }
    } else if (encryptedData instanceof Uint8Array) {
        dataBytes = encryptedData; // If already a Uint8Array, use it directly
    } else {
        throw new Error("Invalid encrypted data type.");
    }

    // XOR decryption (same operation as encryption)
    const decryptedData = dataBytes.map((byte, index) => byte ^ keyBytes[index % keyBytes.length]);

    if (binary) {
        // Return decrypted data as a byte array (Uint8Array)
        return new Uint8Array(decryptedData);
    } else {
        // Convert the byte values back to a string
        return String.fromCharCode(...decryptedData);
    }
}




async function getasync(name, key, binary) {

    if (name == "u") { //cache dirs
        if (localStorage.getItem("profile")) {
            name += localStorage.getItem("profile")
        }
    }

  while (true) {
      try {
          const a = await fetch(`https://tight-cloud-297a.4zuca4.workers.dev/datastores/v1/universes/${localStorage.getItem("id")}/standard-datastores/datastore/entries/entry?datastoreName=${MD5(prefix + name)}&entryKey=${MD5(key)}`, {
              headers: {
                  'x-api-key': localStorage.getItem("apikey"), // Example: Specify JSON format
              },
          });

          // If 404 status, return undefined
          if (a.status === 404) {
              return undefined;
          }

          if (a.status === 200) {
            const t = await a.json();

            if (binary) {
                // Base64 decode to binary and return as Blob
                const binaryString = atob(t); // Base64 decode the string
  
                const byteArray = new Uint8Array(binaryString.length);
  
                for (let i = 0; i < binaryString.length; i++) {
                    byteArray[i] = binaryString.charCodeAt(i);
                }
  
                const fixed = decryptData(byteArray, true)
  
                const blob = new Blob([fixed]); // Convert the byte array to a Blob
                return blob;
            } else {
                return decryptData(atob(t))
            }
          } else {
            await delay(5000); // Wait for 5 seconds before retrying
            continue;
          }



      } catch (error) {
          console.error("Network error:", error);
          await delay(5000); // Wait for 5 seconds before retrying on network errors
      }
  }
}


function toBase64(input) {
    let byteArray;

    if (typeof input === 'string') {
        // If input is a string, use TextEncoder to convert it to a Uint8Array
        byteArray = new TextEncoder().encode(input);
    } else if (input instanceof ArrayBuffer) {
        // If input is an ArrayBuffer, convert it to a Uint8Array
        byteArray = new Uint8Array(input);
    } else if (input instanceof Uint8Array) {
        // If input is already a Uint8Array, use it directly
        byteArray = input;
    } else {
        throw new Error('Unsupported input type');
    }

    // Convert the byteArray to a binary string
    let binaryString = '';
    byteArray.forEach(byte => {
        binaryString += String.fromCharCode(byte);
    });

    // Return the Base64-encoded string
    return btoa(binaryString);
}

async function setasync(name, key, data) {
  const encoded = toBase64(encryptData(data));

  if (name == "u") { //cache dirs
    localStorage.setItem("up1" + key, data)

    if (localStorage.getItem("profile")) {
        name += localStorage.getItem("profile")
      }
  }



  while (true) {
      try {
          const a = await fetch(`https://tight-cloud-297a.4zuca4.workers.dev/datastores/v1/universes/${localStorage.getItem("id")}/standard-datastores/datastore/entries/entry?datastoreName=${MD5(prefix + name)}&entryKey=${MD5(key)}`, {
              headers: {
                  'x-api-key': localStorage.getItem("apikey"),
                  'content-type': "application/json",
              },
              body: JSON.stringify([encoded]),
              method: "POST",
          });

          if (a.status == 200) {
            const t = await a.json();
            break; // Exit loop if the request succeeds
          } else {
            await delay(5000); // Wait for 5 seconds before retrying
            continue;
          }
      
      } catch (error) {
          console.error("Network error:", error);
          await delay(5000); // Wait for 5 seconds before retrying on network errors
      }
  }
}

async function cacheblobs() {
    while (true) {
        async function checkforimages(started) {
            let uploadsObject = await getasync("u", started)
            if (!uploadsObject) {
                uploadsObject = {}
            } else {
                uploadsObject = JSON.parse(uploadsObject)
            }
        
            for (const i in uploadsObject) {
                if (uploadsObject[i][1] == "folder") {
                    await checkforimages(uploadsObject[i][0])
                } else {
                    const thumbloc = uploadsObject[i][4]
                    if (thumbloc != "") {
                        const a = await blobExists(thumbloc)
                        if (!a) {
                            console.log(thumbloc)
                            const fileasblob = await getfileasBLOB(thumbloc, 1)
                            await setCachedBlob(thumbloc, fileasblob)
                        }
    
                    }
                  
                    
    
                }
    
            }
        }
    
        if (!moddingfiles) {
            await checkforimages("root")
        }

        await delay(5000)
    }




  
    
}

cacheblobs()

function opensettings() {
    document.getElementById("settings").style.display = ""
    document.getElementById("auth").style.display = "none"
    document.getElementById("content").style.display = "none"
    
}

function refreshpage(e) {
    document.getElementById("settings").style.display = "none"
    reload()
}



function cleardirs(e) {
    const prefix = 'up1'; // The prefix to match

    // Loop through all keys in localStorage
    for (let i = localStorage.length - 1; i >= 0; i--) {
        const key = localStorage.key(i);
        if (key.startsWith(prefix)) {
            localStorage.removeItem(key);
            console.log(`Removed localStorage key: ${key}`);
        }
    }

    if (!e) {
        alert("Directory Cache Cleared!")
    }

}


async function changeProfile() {
    const selectedProfile = document.getElementById('profile-selector').value;
    let hashedpass = selectedProfile
    if (selectedProfile == "5") {
        let password = await getasync("password","password", false)
        if (!password) {
            const Createpin = prompt("Please Create a password for hidden profile").toString()
            const confirm2 = prompt("Please Confirm your password").toString()
            if (Createpin == confirm2) {
                const hashed = MD5(Createpin)
                const savepass = await setasync("password","password", hashed)
                password = hashed
            } else {
                document.getElementById("profile-selector").value = localStorage.getItem("profile");
                return alert("Password's did not match")
            }
        }

        const enteryoursecpass = prompt("Please enter your password for hidden profile").toString()
        if (!enteryoursecpass) {
            document.getElementById("profile-selector").value = localStorage.getItem("profile");
            return alert("Password not entered")
        }
        const h = MD5(enteryoursecpass)
        if (password == h) {
            hashedpass = MD5(enteryoursecpass + h) //real password is required
            alert("Access Granted")
        } else {
            document.getElementById("profile-selector").value = localStorage.getItem("profile");
            return alert("Password wrong!")
        }
    }

    localStorage.setItem("profile", hashedpass)
    cleardirs(true)
  }
  