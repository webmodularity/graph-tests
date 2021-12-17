import { BigInt } from "@graphprotocol/graph-ts"
import {
  LiquidityAdded,
  Relay,
  Send,
  WithdrawDone
} from "../generated/Contract/Contract"

export function handleLiquidityAdded(event: LiquidityAdded): void {}

export function handleRelay(event: Relay): void {}

export function handleSend(event: Send): void {}

export function handleWithdrawDone(event: WithdrawDone): void {}
