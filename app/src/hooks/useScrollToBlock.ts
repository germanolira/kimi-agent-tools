import { useEffect, type RefObject } from 'react';

export function useScrollToBlock(
  activeBlockId: string | null,
  containerRef: RefObject<HTMLDivElement | null>
) {
  useEffect(() => {
    if (activeBlockId && containerRef.current) {
      const el = containerRef.current.querySelector(`[data-block-id="${activeBlockId}"]`);
      el?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [activeBlockId, containerRef]);
}
