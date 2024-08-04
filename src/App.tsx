import { ShopTable } from "./components/layouts/ShopTable";

export const App = () => {
  return (
    <main className="flex min-h-[90vh] flex-col items-center justify-between m-10 gap-8">
      <ShopTable
        withHeader={true}
        sq="searchqueryTradesRunning"
        dataHeader={dataHeader}
        datacontent={datacontent}
        key={1}
      />
      <ShopTable
        key={2}
        sq="searchqueryTradesDone"
        dataHeader={dataHeader}
        datacontent={datacontent}
      />
    </main>
  );
};
const dataHeader = [
  "Opened At",
  "Asset",
  "Leverage",
  "Amount",
  "Opening Value",
  "Current Value",
  "QTY",
  "Direction",
  "PNL",
  "Status",
];

export const datacontent = [
  {
    OpenedAt: "2022-01-01 00:00:00",
    Asset: "BTCUSDT",
    Leverage: "10x",
    Amount: "1000",
    OpeningValue: "1000",
    CurrentValue: "1000",
    QTY: "1000",
    Direction: "Long",
    PNL: "1000",
    Status: "running",
  },
  {
    OpenedAt: "2022-01-01 00:00:00",
    Asset: "BTCUSDT",
    Leverage: "10x",
    Amount: "1000",
    OpeningValue: "1000",
    CurrentValue: "1000",
    QTY: "1000",
    Direction: "Long",
    PNL: "1000",
    Status: "won",
  },
  {
    OpenedAt: "2022-01-01 00:00:00",
    Asset: "BTCUSDT",
    Leverage: "10x",
    Amount: "1000",
    OpeningValue: "1000",
    CurrentValue: "1000",
    QTY: "1000",
    Direction: "Long",
    PNL: "1000",
    Status: "lost",
  },

  {
    OpenedAt: "2022-01-01 00:00:00",
    Asset: "BTCUSDT",
    Leverage: "10x",
    Amount: "1000",
    OpeningValue: "1000",
    CurrentValue: "1000",
    QTY: "1000",
    Direction: "Long",
    PNL: "1000",
    Status: "lost",
  },

  {
    OpenedAt: "2022-01-01 00:00:00",
    Asset: "BTCUSDT",
    Leverage: "10x",
    Amount: "1000",
    OpeningValue: "1000",
    CurrentValue: "1000",
    QTY: "1000",
    Direction: "Long",
    PNL: "1000",
    Status: "lost",
  },

  {
    OpenedAt: "2022-01-01 00:00:00",
    Asset: "BTCUSDT",
    Leverage: "10x",
    Amount: "1000",
    OpeningValue: "1000",
    CurrentValue: "1000",
    QTY: "1000",
    Direction: "Long",
    PNL: "1000",
    Status: "lost",
  },

  {
    OpenedAt: "2022-01-01 00:00:00",
    Asset: "BTCUSDT",
    Leverage: "10x",
    Amount: "1000",
    OpeningValue: "1000",
    CurrentValue: "1000",
    QTY: "1000",
    Direction: "Long",
    PNL: "1000",
    Status: "lost",
  },
  {
    OpenedAt: "2022-01-01 00:00:00",
    Asset: "BTCUSDT",
    Leverage: "10x",
    Amount: "1000",
    OpeningValue: "1000",
    CurrentValue: "1000",
    QTY: "1000",
    Direction: "Long",
    PNL: "1000",
    Status: "lost",
  },
  {
    OpenedAt: "2022-01-01 00:00:00",
    Asset: "BTCUSDT",
    Leverage: "10x",
    Amount: "1000",
    OpeningValue: "1000",
    CurrentValue: "1000",
    QTY: "1000",
    Direction: "Long",
    PNL: "1000",
    Status: "lost",
  },
  {
    OpenedAt: "2022-01-01 00:00:00",
    Asset: "BTCUSDT",
    Leverage: "10x",
    Amount: "1000",
    OpeningValue: "1000",
    CurrentValue: "1000",
    QTY: "1000",
    Direction: "Long",
    PNL: "1000",
    Status: "lost",
  },
  {
    OpenedAt: "2022-01-01 00:00:00",
    Asset: "BTCUSDT",
    Leverage: "10x",
    Amount: "1000",
    OpeningValue: "1000",
    CurrentValue: "1000",
    QTY: "1000",
    Direction: "Long",
    PNL: "1000",
    Status: "lost",
  },
  {
    OpenedAt: "2022-01-01 00:00:00",
    Asset: "BTCUSDT",
    Leverage: "10x",
    Amount: "1000",
    OpeningValue: "1000",
    CurrentValue: "1000",
    QTY: "1000",
    Direction: "Long",
    PNL: "1000",
    Status: "lost",
  },
  {
    OpenedAt: "2022-01-01 00:00:00",
    Asset: "BTCUSDT",
    Leverage: "10x",
    Amount: "1000",
    OpeningValue: "1000",
    CurrentValue: "1000",
    QTY: "1000",
    Direction: "Long",
    PNL: "1000",
    Status: "lost",
  },
  {
    OpenedAt: "2022-01-01 00:00:00",
    Asset: "BTCUSDT",
    Leverage: "10x",
    Amount: "1000",
    OpeningValue: "1000",
    CurrentValue: "1000",
    QTY: "1000",
    Direction: "Long",
    PNL: "1000",
    Status: "lost",
  },
];
