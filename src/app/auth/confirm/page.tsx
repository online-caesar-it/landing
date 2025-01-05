"use client";

import Confirm from "@/widgets/auth-form/ui/confirm";
import { Suspense } from "react";

const ConfirmPage = () => {
  return (
    <Suspense fallback={<div>...загрузка</div>}>
      <Confirm />
    </Suspense>
  );
};

export default ConfirmPage;
