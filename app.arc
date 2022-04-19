@app
creds-fail

@http
get /

@aws
# profile default
region us-west-2
architecture arm64

@tables
pairs
  id *String
  player1 String
