
import { render, screen, act } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import MediaProgressBar from "../MediaProgressBar";
import { ButtonLabels } from "../types";
import { toast } from "react-hot-toast";

vi.mock("react-hot-toast", () => ({
  toast: {
    success: vi.fn(),
  },
}));

describe("MediaProgressBar", () => {
    const onCompletion = vi.fn();
  
    beforeEach(() => {
      vi.clearAllMocks();
      vi.useFakeTimers();
    });
  
    afterEach(() => {
      vi.runOnlyPendingTimers();
      vi.useRealTimers();
    });
  
    const renderComponent = (isPlaying: boolean, activeButton: ButtonLabels) => {
      render(
        <MediaProgressBar
          activeButton={activeButton}
          isPlaying={isPlaying}
          onCompletion={onCompletion}
        />
      );
    };
  
    it("should start and update progress when isPlaying is true and activeButton is Record", () => {
      renderComponent(true, ButtonLabels.Record);
  
      expect(screen.getByRole("progressbar")).toHaveAttribute("aria-valuenow", "0");
  
      act(() => {
        vi.advanceTimersByTime(1000);
      });
  
      expect(screen.getByRole("progressbar")).toHaveAttribute("aria-valuenow", "5");
    });
  
    it("should reset progress when isPlaying is false", () => {
      renderComponent(false, ButtonLabels.Record);
  
      act(() => {
        vi.advanceTimersByTime(1000);
      });
  
      expect(screen.getByRole("progressbar")).toHaveAttribute("aria-valuenow", "0");
      expect(screen.getByText("00:20:00")).toBeInTheDocument();
    });
  
    it("should call onCompletion and show toast notification when time is up", () => {
      renderComponent(true, ButtonLabels.Record);
  
      act(() => {
        vi.advanceTimersByTime(20000);
      });
  
      expect(onCompletion).toHaveBeenCalled();
      expect(toast.success).toHaveBeenCalledWith("Time's up! Recording complete.");
    });
  
    it("should show different toast messages for Review button", () => {
      renderComponent(true, ButtonLabels.Review);
  
      act(() => {
        vi.advanceTimersByTime(20000);
      });
  
      expect(toast.success).toHaveBeenCalledWith("Time's up! Review complete.");
    });
  });