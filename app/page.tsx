import BettingHistoryPage from "./BettingHistory.client";
import BettingPage from "./BettingPage";
import CricketBetting from "./CricketBetting";
import LandingPage from "./LandingPage";
import LiveMatchesPage from "./LiveMatchPage";
import MatchDetailPage from "./MatchDetail";
import TransactionHistoryPage from "./TransactionHistory";
import WalletPage from "./WalletBalance";
import ProfilePage from "./ProfilePage";

export default function Home()
{
  return (
    <>
      <LandingPage />
      <CricketBetting />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <BettingPage />
      </main>
      <MatchDetailPage />
      <BettingHistoryPage />
      <ProfilePage />
      <TransactionHistoryPage />
      <WalletPage />
      <LiveMatchesPage />
    </>
  )
}
