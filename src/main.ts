async function main() {}

async function run() {
  try {
    await main()
  } catch (err) {
    // output something that a user can understand (and fix)
    console.error(err)
  }
}

run()
