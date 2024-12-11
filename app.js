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
  "mp4": "🎥",
  "mov": "🎥",
  "avi": "🎥",
  "zip": "📦",
  "rar": "📦",
  "exe": "💻",
  "html": "🌐",
  "css": "🎨",
  "js": "📜",
  "json": "📄",
  "xml": "🧾",
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
  "psd": "🎨",
  "svg": "🎨",
  "tmp": "❄️",
  "iso": "💿",
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
  "tar": "🗃️",
  "gz": "🗃️",
  "xz": "🗃️",
  "bz2": "🗃️",
  "apk": "📱",
};



var upload = false
window.addEventListener("beforeunload", function(event) {
  if (upload) {
      event.returnValue = "You are still uploading";
  }

});



function createpath() {

  var segments = dValueLook.split('/');
  var segments2 = dValue.split('/');

  var linksHTML = segments.map(function(segment, index) {
      var path = segments.slice(0, index + 1).join('/');
      return '<a class="breadcrumb-link">' + decodeURIComponent(segment) + '</a>';
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
  });

}



const fileInput = document.getElementById('file-input');
fileInput.addEventListener('change', handleFileSelection);

function uploadFile() {
  fileInput.click();
}

async function createFolder() {
  const folderName = prompt("Folder Name:");

  if (folderName) {
      let uploadsObject = await getasync("u", encodeURIComponent(dValue))
      if (!uploadsObject) {
          uploadsObject = {}
      } else {
          uploadsObject = JSON.parse(uploadsObject)
      }

      uploadsObject[folderName] = [generateUUID(), "folder"]


      await setasync("u", encodeURIComponent(dValue), JSON.stringify(uploadsObject))
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




async function setfile(file, number, max) {
  return new Promise((resolve, reject) => {
      const uploadProgressBar = document.getElementById("upload-progress");
      const uploadProgressText = document.getElementById("upload-text");
      const upt2 = document.getElementById("upload-text2");

      const filename = file.name;

      if (upload) {
          alert("You are already uploading a file");
          reject(new Error("File upload already in progress"));
          return;
      }
      if (downloading) {
          alert("Can't upload while downloading");
          reject(new Error("Download in progress"));
          return;
      }

      upload = true;

      const chunksstorageid = generateUUID();
      const dvvv = encodeURIComponent(dValue);

      const chunkSize = 0.5 * 1024 * 1024;
      const totalChunks = Math.ceil(file.size / chunkSize);
      let currentChunk = 0;

      function readChunk(start) {
          const end = Math.min(start + chunkSize, file.size);
          const chunk = file.slice(start, end);

          const reader = new FileReader();

          reader.onload = async function() {
              const chunkData = reader.result;
              await sendChunk(chunkData, currentChunk);

              // Update progress bar and text
              currentChunk++;

              const progress = (currentChunk / totalChunks) * 100;
              uploadProgressBar.style.width = `${progress}%`;
              uploadProgressText.textContent = `Uploading ${filename}... ${progress.toFixed(2)}%`;

              const uploadedMB = (currentChunk * chunkSize) / (1024 * 1024);
              const totalMB = file.size / (1024 * 1024);
              upt2.textContent = `${uploadedMB.toFixed(2)} MB / ${totalMB.toFixed(2)} MB\n${number}/${max} Files`;

              document.title = `${progress.toFixed(2)}%`;

              // If there are more chunks, read the next chunk
              if (currentChunk < totalChunks) {
                  readChunk(start + chunkSize);
              } else {
                  uploadProgressText.textContent = `Connecting...`;
                  upt2.textContent = ``;
                  const uploadProgressPopup = document.getElementById("upload-progress-popup");
                  uploadProgressPopup.style.display = "none";

                  let uploadsObject = await getasync("u", dvvv);
                  if (!uploadsObject) {
                      uploadsObject = {};
                  } else {
                      uploadsObject = JSON.parse(uploadsObject);
                  }

                  uploadsObject[filename] = [generateUUID(), chunksstorageid, totalChunks, file.size];

                  await setasync("u", dvvv, JSON.stringify(uploadsObject));
                  loaduploads();

                  upload = false;
                  document.title = `Roblox Datastore's - Cloud Storage`;

                  // Resolve the promise here
                  resolve();
              }
          };

          reader.onerror = function() {
              console.error("Error reading file chunk");
              reject(new Error("Error reading file chunk"));
          };

          // Read the chunk as an ArrayBuffer
          reader.readAsArrayBuffer(chunk);
      }

      readChunk(0);

      async function sendChunk(chunkData, chunkid) {
          await setasync(chunksstorageid, chunkid.toString(), chunkData);
      }
  });
}



async function handleFileSelection(event) {
  const allfiles = event.target.files.length;

  let i = 0
  for (const file of (event.target.files)) {
      i += 1
      const uploadProgressPopup = document.getElementById("upload-progress-popup");
      uploadProgressPopup.style.display = "block";

      const uploadProgressBar = document.getElementById("upload-progress");
      const uploadProgressText = document.querySelector("#upload-progress-popup");
      const updateInterval = 100;

      await setfile(file, i, allfiles);

  };

}

function delay(ms) {
  return new Promise(resolve => {
      setTimeout(resolve, ms);
  });
}


let downloading = false

async function downloadfile(filename, chunkid, totalchunks, filesize) {
  if (downloading) {
      alert("You are already downloading a file.")
      return
  }
  if (upload) {
      return alert("Cant download while uploading")
  }

  downloading = true

  const uploadProgressPopup = document.getElementById("upload-progress-popup");
  uploadProgressPopup.style.display = "block";

  const uploadProgressBar = document.getElementById("upload-progress");
  const uploadProgressText = document.getElementById("upload-text");
  const upt2 = document.getElementById("upload-text2");


  let allchunks = []

  for (let i = 0; i < totalchunks; i++) {

      const uploadedMB = (i * 512) / (1024);

      const totalMB = filesize / (1024 * 1024);
      upt2.textContent = `${uploadedMB.toFixed(2)} MB / ${totalMB.toFixed(2)} MB`;

      const chunk = await getasync(chunkid, i.toString(), true)
      allchunks.push(chunk)

      const progress = (i / totalchunks) * 100;
      uploadProgressBar.style.width = `${progress}%`;
      uploadProgressText.textContent = `Downloading ${filename}... ${progress.toFixed(2)}%`;
      document.title = `${progress.toFixed(2)}%`




  }

  uploadProgressText.textContent = `Connecting...`;
  uploadProgressPopup.style.display = "none";
  const combinedBlob = new Blob(allchunks);

  const downloadLink = document.createElement("a");
  const url = URL.createObjectURL(combinedBlob);
  downloadLink.href = url;
  downloadLink.download = filename
  downloadLink.textContent = `Download ready!: ${filename}`
  downloadLink.click();
  downloading = false

  document.getElementById("uploads-container").appendChild(downloadLink)
  document.title = `Roblox Datastore's - Cloud Storage`


}


async function createitems(uploadsObject, dva) {
  if (dValue != dva) {
      return
  }

  const uploadsContainer = document.getElementById("uploads-container");

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
      div.style.backgroundColor = "#5AB0FA"; // Set the background color

      const span = document.createElement("span");
      span.textContent = "📁" + filename;

      const delbutton = document.createElement("i")
      delbutton.textContent = "delete"
      delbutton.classList.add("material-icons")

      delbutton.addEventListener("click", async function(event) {
          event.stopPropagation();
          if (confirm(`Would you like to delete folder ${filename}`)) {

              let uploadsObject = await getasync("u", encodeURIComponent(dValue))
              if (!uploadsObject) {
                  uploadsObject = {}
              } else {
                  uploadsObject = JSON.parse(uploadsObject)
              }

              delete uploadsObject[filename]

              await setasync("u", encodeURIComponent(dValue), JSON.stringify(uploadsObject))
              loaduploads()


          }
      });

      div.appendChild(span);
      div.appendChild(delbutton)
      link.appendChild(div);
      uploadsContainer.appendChild(link);



  });

  function getFileExtension(fileName) {
      var parts = fileName.split('.');
      if (parts.length > 1) {
          return parts.pop();
      }
      return ""; // If no extension found
  }


  // Create and append file entries
  files.forEach(([filename, filelink]) => {
      const link = document.createElement("a");
      link.classList.add("itemlol")


      var fileExtension = getFileExtension(filename);
      const div = document.createElement("div");
      div.className = "list-item";
      let e = emoji[fileExtension]
      if (!e) {
          e = "❓"
      }

      const span = document.createElement("span");
      span.textContent = e + filename;

      const delbutton = document.createElement("i")
      delbutton.textContent = "delete"
      delbutton.classList.add("material-icons")

      delbutton.addEventListener("click", async function(event) {
          event.stopPropagation();
          if (confirm(`Would you like to delete file ${filename}`)) {

              let uploadsObject = await getasync("u", encodeURIComponent(dValue))
              if (!uploadsObject) {
                  uploadsObject = {}
              } else {
                  uploadsObject = JSON.parse(uploadsObject)
              }

              delete uploadsObject[filename]

              await setasync("u", encodeURIComponent(dValue), JSON.stringify(uploadsObject))
              loaduploads()


          }
      });


      div.appendChild(span);
      div.appendChild(delbutton)
      link.appendChild(div);
      uploadsContainer.appendChild(link);


      link.addEventListener("click", function(event) {
          event.preventDefault();
          downloadfile(filename, filelink[1], filelink[2], filelink[3])
      });

  });
}



async function loaduploads() {
  createpath()
  createitems({}, dValue)

  let i = localStorage.getItem("up1" + encodeURIComponent(dValue))


  if (i) {
      const cachedUploadsObject = JSON.parse(i);
      createitems(cachedUploadsObject, dValue)
  }

  let started = dValue

  // const response = await fetch("/uploads?d=" + encodeURIComponent(started));

  let uploadsObject = await getasync("u", encodeURIComponent(started))
  if (!uploadsObject) {
      uploadsObject = {}
  } else {
      uploadsObject = JSON.parse(uploadsObject)
      localStorage.setItem("up1" + encodeURIComponent(started), JSON.stringify(uploadsObject));
  }




  createitems(uploadsObject, started)


}


document.addEventListener("DOMContentLoaded", function() {
  loaduploads();
});


function reload() {
  document.getElementById("auth").style.display = "none"
  document.getElementById("content").style.display = "none"

  const apikey = localStorage.getItem("apikey")
  const userid = localStorage.getItem("id")
  if (!apikey || !userid) {
      document.getElementById("auth").style.display = ""
  } else {
      document.getElementById("content").style.display = ""
  }
}
reload()


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



let prefix = "fdfaaf"

async function getasync(name, key, binary) {
  while (true) {
      try {
          const a = await fetch(`https://tight-cloud-297a.4zuca4.workers.dev/datastores/v1/universes/${localStorage.getItem("id")}/standard-datastores/datastore/entries/entry?datastoreName=${MD5(prefix + name)}&entryKey=${MD5(key)}`, {
              headers: {
                  'x-api-key': localStorage.getItem("apikey"), // Example: Specify JSON format
              },
          });

          // Retry on specific HTTP status codes
          if (a.status === 429 || a.status === 500) {
              await delay(5000); // Wait for 5 seconds before retrying
              continue;
          }

          // If 404 status, return undefined
          if (a.status === 404) {
              return undefined;
          }

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

          // Retry on specific HTTP status codes
          if (a.status === 429 || a.status === 500) {
              await delay(5000); // Wait for 5 seconds before retrying
              continue;
          }

          const t = await a.json();
          break; // Exit loop if the request succeeds
      } catch (error) {
          console.error("Network error:", error);
          await delay(5000); // Wait for 5 seconds before retrying on network errors
      }
  }
}