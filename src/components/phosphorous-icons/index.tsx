"use client";

import {
  StarFourIcon as PhosphorStarFourIcon,
  SparkleIcon as PhosphorSparkleIcon,
  XLogoIcon as PhosphorXLogoIcon,
  LightningIcon as PhosphorLightningIcon,
  ArrowLeftIcon as PhosphorArrowLeftIcon,
  XIcon as PhosphorXIcon,
  SpinnerIcon as PhosphorSpinnerIcon,
  CheckIcon as PhosphorCheckIcon,
  SealCheckIcon as PhosphorSealCheckIcon,
  ArrowUpRightIcon as PhosphorArrowUpRightIcon,
  CardsThreeIcon as PhosphorCardsThreeIcon,
  DribbbleLogoIcon as PhosphorDribbbleLogoIcon,
  BehanceLogoIcon as PhosphorBehanceLogoIcon,
  EnvelopeSimpleIcon as PhosphorEnvelopeSimpleIcon,
  LinkedinLogoIcon as PhosphorLinkedinLogoIcon,
} from "@phosphor-icons/react";

function StarFourIcon() {
  return (
    <PhosphorStarFourIcon
      weight="fill"
      className="animate-pulse"
      color="#00997e"
      size={10}
    />
  );
}

function StarFourIconSimple() {
  return <PhosphorStarFourIcon size={12} />;
}

function SparkleIcon() {
  return <PhosphorSparkleIcon size={12} />;
}

function XLogoIcon() {
  return <PhosphorXLogoIcon size={12} />;
}

function LightningIcon() {
  return <PhosphorLightningIcon size={12} />;
}

function ArrowLeftIcon() {
  return <PhosphorArrowLeftIcon size={12} />;
}

function XIcon({ onClick }: { onClick: () => void }) {
  return <PhosphorXIcon size={12} onClick={onClick} />;
}

function SpinnerIcon() {
  return <PhosphorSpinnerIcon size={12} className="animate-spin" />;
}

function CheckIcon() {
  return <PhosphorCheckIcon size={12} />;
}

function CloseIcon() {
  return <PhosphorXIcon size={12}/>;
}

function SealCheckIcon() {
  return <PhosphorSealCheckIcon size={12} />;
}

function ArrowUpRightIcon() {
  return <PhosphorArrowUpRightIcon
  className="mt-1 flex-shrink-0 text-gray-400 transition-colors hover:text-gray-600"
  size={12} />;
}

function CardsThreeIcon() {
  return <PhosphorCardsThreeIcon size={12} />;
}

function DribbbleLogoIcon() {
  return <PhosphorDribbbleLogoIcon size={12} />;
}

function BehanceLogoIcon() {
  return <PhosphorBehanceLogoIcon size={12} />;
}

function EnvelopeSimpleIcon() {
  return <PhosphorEnvelopeSimpleIcon size={12} />;
}

function LinkedinLogoIcon() {   
  return <PhosphorLinkedinLogoIcon size={12} />;
}

export {
  StarFourIcon,
  StarFourIconSimple,
  SparkleIcon,
  XLogoIcon,
  LightningIcon,
  ArrowLeftIcon,
  XIcon,
  SpinnerIcon,
  CheckIcon,
  CloseIcon,
  SealCheckIcon,
  ArrowUpRightIcon,
  CardsThreeIcon,
  DribbbleLogoIcon,
  BehanceLogoIcon,
  EnvelopeSimpleIcon,
  LinkedinLogoIcon,
};
