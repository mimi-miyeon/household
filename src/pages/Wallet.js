import Asset from "../components/Main/Asset/Asset";
import MoneyLeft from "../components/Main/MoneyLeft/MoneyLeft";
import WalletForm from "../components/Main/WalletForm/WalletForm";

const Wallet = () => {
  return (
    <>
      <section>
        <MoneyLeft />
      </section>

      <section>
        <Asset />
        <WalletForm />
      </section>
    </>
  )
}

export default Wallet;