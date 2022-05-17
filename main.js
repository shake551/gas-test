function main() {
  const url = "https://docs.google.com/spreadsheets/d/10dILgcMHG6JtWACr-_Prng72OnOGYsf_-oGERfuBJXw/edit#gid=0";
  const id  = url.split('/d/')[1].split('/')[0];
  console.log(id);
  const sheet = Drive.Files.get(id);
  console.log(sheet.lastModifyingUserName);
  console.log(sheet.modifiedDate);
  console.log(sheet)
}
